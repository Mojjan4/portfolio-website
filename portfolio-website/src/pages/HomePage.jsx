import React from "react";
import { Typography, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "100vh",
        padding: "200px",
      }}
    >
      <Typography variant="h4" color="white">
        Welcome to My Digital Portfolio
      </Typography>
    </Box>
  );
};

export default HomePage;
