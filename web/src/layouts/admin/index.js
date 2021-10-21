import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { getActiveRoute, getCollapseStates, getRoutes } from "utils";
import { Box, styled } from "@mui/system";
import { useHistory } from "react-router-dom";
import { AdminRotes } from "routes";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { useTheme } from "@emotion/react";
import {
  Collapse,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  List,
} from "@mui/material";
import { ExpandLess, ExpandMore, Menu } from "@mui/icons-material";

const drawerWidth = 240;

const Root = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary[100],
  // width: `calc(100% - ${drawerWidth})`,
  height: "100%",
  display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Admin() {
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    ...getCollapseStates(AdminRotes),
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changeState = (st) => {
    setState((_v) => ({ ..._v, ...st }));
  };

  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.redirect) return null;
      if (prop.norender) return null;
      const RouteIcon = prop.Icon;
      const colors = {
        backgroundColor:
          getActiveRoute(AdminRotes) === prop
            ? theme.palette.primary.main
            : "unset",
        color: getActiveRoute(AdminRotes) === prop ? "white" : "inherit",
        icon:
          getActiveRoute(AdminRotes) === prop
            ? "white"
            : theme.palette.primary.main,
      };

      if (prop.collapse) {
        let st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <div key={key}>
            <ListItem
              disabled={prop.disabled ? prop.disabled : false}
              button
              onClick={() => {
                changeState(st);
                // let key = Object.keys(st)[0];
                // if (st[key] === true) {
                //   if (prop.path) {
                //     history.push(prop.layout + prop.path);
                //   }
                // }
              }}
              key={key}
            >
              <ListItemIcon
                style={{
                  color: colors.icon,
                }}
              >
                <RouteIcon />
              </ListItemIcon>
              <ListItemText primary={prop.name} disableTypography={true} />
              {state[prop.state] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse timeout="auto" in={state[prop.state]}>
              <List component="div">{createLinks(prop.views)}</List>
            </Collapse>
          </div>
        );
      }
      return (
        <ListItem
          disabled={prop.disabled ? prop.disabled : false}
          button
          onClick={() => history.push(prop.layout + prop.path)}
          key={key}
          style={{
            backgroundColor: colors.backgroundColor,
          }}
        >
          <ListItemIcon
            style={{
              color: colors.icon,
            }}
          >
            <RouteIcon />
          </ListItemIcon>
          <ListItemText
            primary={prop.name}
            disableTypography={true}
            style={{
              color: colors.color,
            }}
          />
        </ListItem>
      );
    });
  };

  return (
    <Root>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {getActiveRoute(AdminRotes).name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {createLinks(AdminRotes)}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Switch>
          {getRoutes("/admin", history, AdminRotes)}
          <Redirect from="/admin" to="/admin/login" />
        </Switch>
      </Box>
    </Root>
  );
}
