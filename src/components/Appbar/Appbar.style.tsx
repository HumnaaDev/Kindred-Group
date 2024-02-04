import { styled } from "@mui/material/styles";
import { Box, type BoxProps as IBoxProps } from "@mui/material";
import { baseTheme as theme } from "../../utils/theme";

export const AppbarWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  "&.appbar-container": {
    minHeight: "50px",
    ".appbar": {
      position: "fixed",
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },
    ".css-11b3ww9-MuiPaper-root-MuiAppBar-root": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
