import { styled } from "@mui/material/styles";
import { Box, type BoxProps as IBoxProps } from "@mui/material";
import { baseTheme as theme } from "../../utils/theme";

export const SidebarWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  "&.sidebar-container": {
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    width: "180px",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      height: "100%",
    },
    ".item": {
      cursor: "pointer",
      padding: 20,
    },
    divider: {
      backgroundColor: "#fff",
    },
    ".selected": {
      backgroundColor: "#202125",
    },
  },
}));
