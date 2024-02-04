import { Box, styled, type BoxProps as IBoxProps } from "@mui/material";
import { baseTheme as theme } from "../../utils/theme";

export const CardWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  "&.card-container": {
    cursor: "pointer",
    minWidth: "150px",
    ".card": {
      boxShadow:
        "0px 2px 20px -1px rgba(14,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
      },
    },
    ".card-media": {
      display: "table",
      margin: "auto",
      height: "auto",
      width: "auto",
      padding: "15px 0px",
      maxHeight: "200px",
      objectFit: "contain",
      objectPosition: "center",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    ".text-div": {
      display: "flex",
    },
    ".card-name": {
      whiteSpace: "nowrap",
      width: "200px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    ".card-text": {
      fontSize: "12px",
      whiteSpace: "nowrap",
      width: "200px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    ".selected": {
      color: "red",
    },
  },
}));
