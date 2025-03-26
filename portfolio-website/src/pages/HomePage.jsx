import React from "react";
import { Typography, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Align content to the left
        marginLeft: "2rem", // Adjust spacing from the left edge
        marginTop: "2rem", // Adjust spacing from the top
        gap: 2, // Space between elements
      }}
    >
      <Typography variant="h4" color="white">
        Welcome to My Digital Portfolio
      </Typography>

      {/* Second Text Inside Rounded Rectangle */}
      <Box
        sx={{
          borderInlineColor: "white",
          border: "1px solid white",
          padding: "10px 20px",
          borderRadius: "10px", // Rounded corners
          display: "inline-block",
        }}
      >
        <Typography variant="h6">
          Christopher Lundqvist / Software Developer
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
