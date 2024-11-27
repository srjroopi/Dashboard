import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Welcome: React.FC = () => {

  const linkStyles = {
    textDecoration: "none",
    position: "relative",
    color: "inherit",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -3,
      width: "0%",
      height: "2px",
      background: "black",
      transition: "width 0.3s ease-in-out",
    },
    "&:hover::after": {
      width: "100%",
    },
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "white",
        paddingX: { xs: 2, md: 3 },
        alignItems:'center',
      }}
    >
      <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
        {/* Left Box for the title */}
        <Box
          sx={{
            color: "black",
            fontFamily: "Segoe UI",
            fontWeight: "bold",
            variant: "h5",
            fontSize: { xs: "1rem", md: "1.5rem" },
          }}
        >
          <Typography
            variant="h5"
            component="a"
            href="#about"
            fontWeight= "bold"
            fontFamily="Segoe UI"
            sx={linkStyles}>
            roopesh</Typography>
        </Box>

        {/* Right Box for navigation links */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            color: "black",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography
            component="a"
            href="#about"
            fontFamily="Segoe UI"
            sx={linkStyles}
          >
            About
          </Typography>
          <Typography
            component="a"
            href="#portfolio"
            fontFamily="Segoe UI"
            sx={linkStyles}
          >
            Portfolio
          </Typography>
          <Typography
            component="a"
            href="#contact"
            fontFamily="Segoe UI"
            sx={linkStyles}
          >
            Contact
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Welcome;
