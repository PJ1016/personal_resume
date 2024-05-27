import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import ReactQuill from "react-quill";

interface IComment {
  id: number;
  user_name: string;
  time_stamp: string;
  content: string;
}

export const mockComments: IComment[] = [];

const CommentSection = () => {
  const [value, setValue] = useState<string>("");
  const [comments, setComments] = useState<IComment[]>(mockComments);
  const [viewComments, setViewComments] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        "https://pj1016.pythonanywhere.com/getComments"
      );
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, []);

  const addComment = async () => {
    const currentTime = new Date().toISOString(); // Get current time in UTC format
    const formattedTimestamp = currentTime.replace("T", " ").replace("Z", ""); // Replace 'T' with space and remove 'Z'
    await fetch("https://pj1016.pythonanywhere.com/addComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: "Anonymous",
        time_stamp: formattedTimestamp,
        content: value,
      }),
    });
    setValue("");
  };

  const renderComments = (comments: IComment[]) => {
    return comments
      .sort(
        (a: IComment, b: IComment) =>
          new Date(b.time_stamp).getTime() - new Date(a.time_stamp).getTime()
      )
      .map((comment) => {
        return (
          <Box marginTop={2} key={comment.id}>
            <Paper
              sx={{
                padding: "1rem",
                marginBottom: "1rem",
              }}
              elevation={3}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                  <Typography fontFamily="monospace">
                    {comment.user_name}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography fontFamily="monospace">
                    {formatDistanceToNow(
                      new Date(comment.time_stamp).toUTCString(),
                      {
                        addSuffix: true,
                      }
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    fontFamily="monospace"
                    dangerouslySetInnerHTML={{ __html: comment.content }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Box>
        );
      });
  };

  return (
    <Box sx={{ padding: "1rem", fontFamily: "monospace" }}>
      <Typography fontSize="1.5rem" marginY={2}>
        Please provide your feedback
      </Typography>
      <Paper sx={{ padding: "2", backgroundColor: "ButtonShadow" }}>
        <ReactQuill
          theme="snow"
          value={value}
          style={{ padding: "1rem" }}
          onChange={(data) => setValue(data)}
          placeholder="Please add your work experience content"
        />
        <Stack justifyContent="end" direction="row" paddingX="1rem">
          <Button onClick={addComment} disabled={value.length === 0}>
            Comment
          </Button>
        </Stack>
      </Paper>
      <Button onClick={() => setViewComments(true)}>View Comments</Button>
      {viewComments && renderComments(comments)}
    </Box>
  );
};

export default CommentSection;
