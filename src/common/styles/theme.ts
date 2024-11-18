import { createTheme, ThemeOptions } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const palette: PaletteOptions = {
  primary: {
    main: "#1976d2",
  },
  secondary: {
    main: "#f50057",
  },
};

const typography: TypographyOptions = {
  fontFamily: "Roboto, Arial, sans-serif",
  h1: {
    fontSize: "2rem",
    "@media (min-width:600pxs)": {
      fontSize: "2rem",
    },
  },
};

const themeOption: ThemeOptions = {
  palette,
  typography,
};

const theme = createTheme(themeOption);
export default theme;
