import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { FC } from "react";
import { AppbarWrapper } from "./Appbar.style";
import { Divider } from "@mui/material";

type IAppbarProps = {
  title: string;
};

export const Appbar: FC<IAppbarProps> = ({ title }) => {
  return (
    <AppbarWrapper className="appbar-container">
      <AppBar className="appbar">
        <IconButton data-testid="drawer" color="inherit">
          Kindred Group
        </IconButton>
        <Divider orientation="vertical" />
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </AppbarWrapper>
  );
};
