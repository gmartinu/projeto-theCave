import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { getRoutes } from "utils";
import { styled } from "@mui/system";
import { useHistory } from "react-router-dom";
import { AdminRotes } from "routes";

const Root = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary[100],
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default function Admin() {
  const history = useHistory();

  return (
    <Root>
      <Switch>
        {getRoutes("/auth", history, AdminRotes)}
        <Redirect from="/auth" to="/auth/login" />
      </Switch>
    </Root>
  );
}
