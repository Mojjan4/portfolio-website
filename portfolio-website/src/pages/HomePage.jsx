import React from "react";
import { Box, Typography } from "@mui/material";
import ProfileImage from '../assets/darth_vader.jpg';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

const HomePage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            {/* Box 2 (80% of screen height) */}
            <Box
                sx={{
                    width: "80%",  // 80% of the width
                    height: "80%",  // 90% of the height
                    display: "flex",
                    flexDirection: "row",
                    gap: "100px",  // Added gap between Box 3 and Box 4
                }}
            >
                {/* Box 3: Text section */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start", // Align to the top
                        alignItems: "flex-start", // Align to the left
                        maxWidth: "40%", // Add padding to the whole box
                    }}
                >
                    {/* First text */}
                    <Typography
                        sx={{
                            fontSize: "100px",
                            marginBottom: "150px",
                        }}>
                        Welcome to My Digital Portfolio
                    </Typography>

                    {/* Second text */}
                    <Typography
                        variant="h4"
                        sx={{
                            padding: "20px 30px", // Add horizontal padding inside the border
                            textAlign: "center",
                            border: "1px solid white",
                            borderRadius: "30px",
                            whiteSpace: "nowrap", // Prevents text from wrapping
                            display: "inline-block", // Ensures the border only wraps the text width
                            marginTop: "10px", // Ensures it's right below the first text
                        }}
                    >
                        Christopher Lundqvist / Software Developer
                    </Typography>
                </Box>

                {/* Box 4: Image and arrow */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingTop: "10px",
                        gap: "20px",
                        width: "100%", // Ensure Box 4 takes full width
                    }}
                >
                    {/* Image */}
                    <img
                        src={ProfileImage}
                        alt="Profile"
                        style={{
                            width: "60%",
                            height: "auto",
                            borderRadius: "50%",
                            marginBottom: "20px",
                        }}
                    />

                    {/* Arrow and Text */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-end", // Moves the content to the right
                            width: "100%", // Ensures this Box spans full width of Box 4
                            paddingRight: "50px", // Adjust this value to push it further right
                            marginTop: "auto", // Keeps it at the bottom
                        }}
                    >
                        <SubdirectoryArrowRightIcon
                            sx={{
                                fontSize: "50px",
                                marginRight: "40px", // Space between arrow and text
                            }}
                        />
                        <Typography
                            variant="h4"
                            sx={{ color: "white", whiteSpace: "nowrap" }}
                        >
                            Work with me today
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
