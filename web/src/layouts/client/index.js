import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { getRoutes } from "utils";
import { styled } from "@mui/system";
import { useHistory } from "react-router-dom";
import { AdminRotes } from "routes";

const Root = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary[50],
  height: "100%",
}));

export default function Client() {
  const history = useHistory();

  return (
    <Root>
      <Switch>
        {getRoutes("/admin", history, AdminRotes)}
        <Redirect from="/admin" to="/admin/login" />
      </Switch>
    </Root>
  );
}
