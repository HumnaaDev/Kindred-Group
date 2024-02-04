import { FC } from "react";
import { Divider, Grid } from "@mui/material";
import { SidebarWrapper } from "./Sidebar.style";
import { SidebarItem } from "../../constants/enum";
import { useNavigate } from "react-router-dom";
import { FAVORITE_MOVIES, TRENDING_MOVIES } from "../../router/paths";
import { useStoreContext } from "../../store/storeContext";

type ISidebarProps = {};

export const Sidebar: FC<ISidebarProps> = () => {
  const navigate = useNavigate();
  const {
    actions: { setSidebarSelectedItem },
    states: { sidebarSelectedItem },
  } = useStoreContext();

  const itemClickHandler = (route: string, type: string) => {
    setSidebarSelectedItem(type);
    navigate(route);
  };

  return (
    <SidebarWrapper className="sidebar-container">
      <Grid
        className={`item ${sidebarSelectedItem === SidebarItem.TRENDING && "selected"}`}
        onClick={() => itemClickHandler(TRENDING_MOVIES, SidebarItem.TRENDING)}
      >
        Trending Movies
      </Grid>
      <Divider className="divider" />
      <Grid
        className={`item ${sidebarSelectedItem === SidebarItem.FAVORITE && "selected"}`}
        onClick={() => itemClickHandler(FAVORITE_MOVIES, SidebarItem.FAVORITE)}
      >
        Favorite
      </Grid>
    </SidebarWrapper>
  );
};
