import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import PropTypes from "prop-types";

const GsDialog = (props) => {
  const handleClose = () => {
    if (props.onCancel) {
      props.onCancel();
    }
    props.onClose();
  };
  const handleConfirm = () => {
    props.onConfirm();
    props.onClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.msg ? (
              Array.isArray(props.msg) ? (
                props.msg.map((msg, key) => {
                  return (
                    <span key={key}>
                      <b>{msg[0]}</b>:{" "}
                      {typeof msg[1][0] === "object"
                        ? Object.entries(msg[1][0]).map((msg, o) => (
                            <span key={o} style={{ marginLeft: 10 }}>
                              <b>{msg[0]}</b>: {msg[1][0]}
                            </span>
                          ))
                        : msg[1][0]}
                      <br></br>
                    </span>
                  );
                })
              ) : (
                <span>{props.msg}</span>
              )
            ) : null}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {props.type === "message" ? (
            <Button onClick={handleClose} color="primary" autoFocus>
              Ok
            </Button>
          ) : (
            <div>
              <Button onClick={handleClose} color="primary" autoFocus>
                Cancelar
              </Button>
              <Button
                variant="contained"
                onClick={handleConfirm}
                color="primary"
                autoFocus
                style={{ marginLeft: 10 }}
              >
                Ok
              </Button>
            </div>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

GsDialog.propTypes = {
  open: PropTypes.bool,
  type: PropTypes.oneOf(["message", "confirm"]),
  msg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  title: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
};

export default GsDialog;
