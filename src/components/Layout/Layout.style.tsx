import { styled } from "@mui/material/styles";
import { Box, type BoxProps as IBoxProps } from "@mui/material";
import { baseTheme as theme } from "../../utils/theme";

export const LayoutWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  ".main-container": {
    display: "flex",
    ".sidebar": {
      position: "fixed",
      width: "183px",
      [theme.breakpoints.down("md")]: {
        height: "100%",
      },
    },
    ".main-content": {
      width: "80%",
      padding: "20px",
      display: "flex",
      flexWrap: "wrap",
      gap: "18px",
      marginLeft: "183px",
    },
  },
}));
