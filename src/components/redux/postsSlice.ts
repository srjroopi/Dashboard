import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const querySnapshot = await getDocs(collection(firestore, "posts"));
  const posts: Post[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Post[];
  return posts;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost: Omit<Post, "id">) => {
    const docRef = await addDoc(collection(firestore, "posts"), newPost);
    return { id: docRef.id, ...newPost };
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.posts.push(action.payload);
      });
  },
});

export default postsSlice.reducer;
