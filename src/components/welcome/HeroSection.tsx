import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from "framer-motion";
import "../../common/styles/global.css";;

const HeroSection: React.FC = () => {

    // Styles for IconButton with hover effect
    const iconButtonStyles = {
        transition: "transform 0.3s ease-in-out", // Smooth transition
        "&:hover": {
        transform: "scale(1.3)", // Grow on hover
        },
        "&:active": {
        transform: "scale(1.1)", // Slight shrink when clicked
        },
    };
    
    // Styles for Icons
    const iconStyles = {
        fontSize: 42, // Default size
        transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out", // Smooth color and transform transition
    };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: 2, sm: 4 },
        height: { xs: "auto", md: "85vh" },
        textAlign: { xs: "center", md: "left" },
        gap: { xs: 3, md: 0 },
      }}
    >
      {/* Left Content */}
      <Box sx={{ maxWidth: { xs: "100%", md: "50%" } }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
          fontFamily="Segoe UI"
        >
          RoopeSh
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 2, fontSize: { xs: "1rem", md: "1.5rem" } }}
          fontFamily="Segoe UI"
        >
          A web developer.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, fontSize: { xs: "0.9rem", md: "1rem" } }}
          fontFamily="Segoe UI"
        >
          I am currently working as a frontend developer.
        </Typography>

        {/* Social Buttons with Bubble Animation */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {/* GitHub Icon with hover animation */}
          <IconButton
            component="a"
            href="https://github.com/srjroopi"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconButtonStyles}
          >
            <GitHubIcon sx={{ ...iconStyles, color:'black'}} />
          </IconButton>

          {/* LinkedIn Icon with hover animation */}
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/roopeshs24/"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconButtonStyles}
          >
            <LinkedInIcon sx={{ ...iconStyles, color: 'blue' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Right Illustration */}
      <Box
        component="img"
        src="https://via.placeholder.com/400"
        alt="Illustration"
        sx={{
          maxWidth: { xs: "80%", md: "40%" },
          height: "auto",
          margin: { xs: "0 auto", md: "0" },
        }}
      />
    </Box>
  );
};

export default HeroSection;
