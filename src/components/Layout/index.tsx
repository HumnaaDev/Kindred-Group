import { FC, ReactNode } from "react";
import { Appbar, Sidebar } from "../index";
import { Box, Grid } from "@mui/material";
import { LayoutWrapper } from "./Layout.style";

type ILayoutProps = {
  children: ReactNode;
};

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <Appbar title="Trending Movies" />
        <Grid className="main-container">
          <Box className="sidebar">
            <Sidebar />
          </Box>
          <Box component="main" className="main-content">
            {children}
          </Box>
        </Grid>
      </LayoutWrapper>
    </>
  );
};
