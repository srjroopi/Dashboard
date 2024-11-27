import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../components/redux/postsSlice";
import { AppDispatch, RootState } from "../components/redux/store";
import { CircularProgress, Card, CardContent, Typography, Box } from "@mui/material";

const PostsList = () => {
  const dispatch: AppDispatch = useDispatch();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      {loading && <CircularProgress />}
      {error && (
        <Typography color="error" variant="h6">
          {error}
        </Typography>
      )}
      <Box sx={{ display: "grid", gap: 2 }}>
        {posts.map((post) => (
          <Card key={post.id} sx={{ width: 500, maxHeight:400, margin: "0 auto" }}>
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                {post.content}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <i>By {post.author}</i>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PostsList;
