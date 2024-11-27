import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../components/redux/postsSlice";
import { AppDispatch } from "../components/redux/store";
import { TextField, Button, Typography, Box } from "@mui/material";

const CreatePost = () => {
  const dispatch: AppDispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    if (title && content && author) {
      dispatch(createPost({ title, content, author }));
      setTitle("");
      setContent("");
      setAuthor("");
    } else {
      alert("All fields are required");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        maxHeight: 300,
        margin: "0 auto",
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Create Post
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <TextField
        label="Author"
        variant="outlined"
        fullWidth
        margin="normal"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        sx={{ marginTop: 2 }}
      >
        Post
      </Button>
    </Box>
  );
};

export default CreatePost;
