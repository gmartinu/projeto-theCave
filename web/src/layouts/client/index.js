import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { getActiveRoute, getRoutes } from "utils";
import { Box, styled } from "@mui/system";
import { useHistory } from "react-router-dom";
import { ClientRotes } from "routes";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { Button } from "components";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Root = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary[50],
  height: "100%",
}));

export default function Client() {
  const history = useHistory();

  const handleOpenGithub = () => {
    window.open("https://github.com/gmartinu/projeto-theCave", "_blank")
  }
  
  const handleOpenAdmin = () => {
    history.push("/auth")
  }

  return (
    <Root>
      <AppBar position="fixed">
        <Toolbar>
          <Box display="flex" justifyContent="center" alignItems="center" style={{ width: "100%" }}>
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleOpenGithub}
                edge="start"
                sx={{
                  marginRight: "16px",
                }}
              >
                <GitHub />
              </IconButton>
            </Box>
            <Box flexGrow={1}>
              <Typography variant="h6" noWrap component="div">
                Área de Agendamentos
              </Typography>
            </Box>
            <Box>
              <Button variant="outlined" onClick={() => handleOpenAdmin()} style={{ color: 'white', borderColor: 'white' }}>
                Administrador
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <DrawerHeader />
      <Box p={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "calc(100% - 64px)", boxSizing:"border-box"}}>
        <Switch>
          {getRoutes("/client", history, ClientRotes)}
          <Redirect from="/client" to="/client/home" />
        </Switch>
      </Box>
    </Root>
  );
}
