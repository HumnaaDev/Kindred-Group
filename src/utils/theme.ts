import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    customVariables: {
      fontWeightSemiBold: number;
      tableStripedBg: string;
      tableHoverBg: string;
    };
  }

  interface ThemeOptions {
    customVariables?: {
      fontWeightSemiBold?: number;
      tableStripedBg?: string;
      tableHoverBg?: string;
    };
  }
}

export const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#384A58",
    },
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: 48,
      lineHeight: "56px",
      fontWeight: 700,
    },
    h2: {
      fontSize: 36,
      lineHeight: "48px",
      fontWeight: 700,
    },
    h3: {
      fontSize: 24,
      lineHeight: "32px",
      fontWeight: 700,
    },
    h4: {
      fontSize: 18,
      lineHeight: "24px",
      fontWeight: 700,
    },
    body2: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: 700,
    },
    button: {
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 600,
      textTransform: "capitalize",
      outline: "0 none",
      borderRadius: "shape",
      border: "1px solid transparent",
    },
  },
  shape: {
    borderRadius: 8,
  },
  customVariables: {
    fontWeightSemiBold: 600,
    tableStripedBg: "#F8F8F8",
    tableHoverBg: "#E5E9F5",
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
