import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Welcome: React.FC = () => {

  return (
    <AppBar 
      position="fixed" 
      sx={{
        background: `linear-gradient(135deg, rgba(137, 67, 243, 0.1), rgba(0, 204, 255, 0.1)), rgba(255, 255, 255, 0.8)` // Slightly transparent or altered shade
      }}
    >
      <Toolbar disableGutters>
        {/* Your content */}
      </Toolbar>
    </AppBar>
  );
};

export default Welcome;
