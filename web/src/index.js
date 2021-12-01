/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Snackbar } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom";
import { MsgDialog } from "components";
import "assets/css/index.css";
import "assets/css/scroll.css";
import { theme } from "utils/theme";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MuiAlert from "@mui/material/Alert";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { AdminLayout, AuthLayout, ClientLayout } from "layouts";
import { setDefaultProtoTypes } from "assets/js/prototypes";

setDefaultProtoTypes();

const AppConstantsDefault = {
  snack: {
    /**
     * @param {string} msg Snack Mensage
     * @param {number} timer Show Time
     */
    error: (msg, timer) => {
      return msg, timer;
    },
    /**
     * @param {string} msg Snack Mensage
     * @param {number} timer Show Time
     */
    warning: (msg, timer) => {
      return msg, timer;
    },
    /**
     * @param {string} msg Snack Mensage
     * @param {number} timer Show Time
     */
    info: (msg, timer) => {
      return msg, timer;
    },
    /**
     * @param {string} msg Snack Mensage
     * @param {number} timer Show Time
     */
    success: (msg, timer) => {
      return msg, timer;
    },
    /**
     * @param {string} msg Snack Mensage
     * @param {number} timer Show Time
     */
    clear: (msg, timer) => {
      return msg, timer;
    },
  },
  dialog: {
    /**
     * Shows a simple message dialog
     * @param {string} msg Dialog Message
     * @param {string} title Dialog Title
     */
    showMessage: (msg, title) => {
      return msg, title;
    },
    /**
     * Shows a Confirm message dialog
     * @param {string} msg Dialog Message
     * @param {string} title Dialog Title
     * @param {func} onConfirm Confirm Callback
     * @param {func} onCancel Optional Cancel Callback
     */
    showConfirm: (msg, title, onConfirm, onCancel) => {
      return msg, title, onConfirm, onCancel;
    },
  },
};

export const AppContext = React.createContext(AppConstantsDefault);

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () => {
  const appConstants = React.useContext(AppContext);
  const [snackBar, setSnackBar] = React.useState({
    open: false,
    type: "",
    msg: "",
    timer: 1000,
  });
  const [dialog, setDialog] = React.useState({
    open: false,
    type: "message",
    msg: "",
    title: "",
    onConfirm: undefined,
    onCancel: undefined,
  });

  const openSnackBar = (type, msg, timer) => {
    setSnackBar((_v) => ({
      ..._v,
      open: true,
      type: type,
      msg: msg,
      timer: timer,
    }));
  };

  const openDialog = (type, msg, title, onConfirm, onCancel) => {
    setDialog((_v) => ({
      ..._v,
      open: true,
      type: type,
      msg: msg,
      title: title,
      onConfirm: onConfirm,
      onCancel: onCancel,
      onClose: closeDialog,
    }));
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackBar((_v) => ({ ..._v, open: false, type: "", msg: "" }));
  };

  const closeDialog = () => {
    setDialog((_v) => ({
      ..._v,
      onConfirm: undefined,
      onCancel: undefined,
      open: false,
    }));
  };

  React.useEffect(() => {
    // SNACK FUNCTIONS
    appConstants.snack.error = (msg, timer = 1000) =>
      openSnackBar("error", msg, timer);
    appConstants.snack.warning = (msg, timer = 1000) =>
      openSnackBar("warning", msg, timer);
    appConstants.snack.info = (msg, timer = 1000) =>
      openSnackBar("info", msg, timer);
    appConstants.snack.success = (msg, timer = 1000) =>
      openSnackBar("success", msg, timer);
    appConstants.snack.clear = closeSnackbar;
    //DIALOG FUNCTIONS
    appConstants.dialog.showMessage = (msg, title = "Alerta") =>
      openDialog("message", msg, title);
    appConstants.dialog.showConfirm = (
      msg,
      title = "Mensagem de Confirmação",
      onConfirm,
      onCancel
    ) => openDialog("confirm", msg, title, onConfirm, onCancel);
  }, [appConstants]);

  const vertical = "bottom";
  const horizontal = "center";

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <AppContext.Provider value={appConstants}>
          {snackBar.open ? (
            <div>
              <Snackbar
                open={snackBar.open}
                autoHideDuration={snackBar.timer}
                onClose={closeSnackbar}
                anchorOrigin={{ vertical, horizontal }}
              >
                <Alert severity={snackBar.type}>{snackBar.msg}</Alert>
              </Snackbar>
            </div>
          ) : null}
          <MsgDialog {...dialog} />
          <Router>
            <Switch>
              <Route path="/client" component={ClientLayout} />
              <Route path="/admin" component={AdminLayout} />
              <Route path="/auth" component={AuthLayout} />
              <Redirect from="/" to="/client" />
            </Switch>
          </Router>
        </AppContext.Provider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
