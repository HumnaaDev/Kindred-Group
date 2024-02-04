import { styled } from "@mui/material/styles";
import { Box, type BoxProps as IBoxProps } from "@mui/material";
import { baseTheme as theme } from "../../utils/theme";

export const NotFoundWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  "&.not-found": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  ".title": {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  ".image": {
    width: "100%",
    maxWidth: "400px",
    marginBottom: theme.spacing(2),
  },
}));
