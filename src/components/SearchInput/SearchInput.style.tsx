import { styled } from "@mui/material/styles";
import { Box, type BoxProps as IBoxProps } from "@mui/material";

export const SearchInputWrapper = styled(
  Box,
  {},
)<Partial<IBoxProps>>(() => ({
  "&.search-input": {
    width: "100%",
  },
}));
