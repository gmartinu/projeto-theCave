import { Face, LockOutlined } from "@mui/icons-material";
import { Grid, InputAdornment, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Button, Paper, TextField } from "components";
import React from "react";
import { handleChange } from "utils";
import { AppContext } from "index";
import auth from "data/auth";

const BoxTitle = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  position: "relative",
  top: theme.spacing(-2),
  marginBottom: theme.spacing(-4),
  background: `linear-gradient(60deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
  boxShadow:
    "0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(60 114 193 / 40%)",
  width: "fit-content",
  margin: "auto",
  padding: theme.spacing(2, 4),
}));

const BoxContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2, 2, 2),
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  size: theme.spacing(8),
  fontSize: 70,
  fontWeight: "bold",
}));

function AdminAuth({ history }) {
  const { snack } = React.useContext(AppContext);
  const [state, setState] = React.useState({
    username: "",
    password: "",
  });

  React.useEffect(() => {
    localStorage.clear();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.username && state.password) {
      auth
        .login(state)
        .then((res) => {
          snack.success("Sucesso ao Logar!");
          localStorage.setItem("token", `${res.token}`);
          history.push("/admin/dashboard");
        })
        .catch((err) => {
          snack.error("Usuário ou Senha Inválidos :( ");
        });
    } else {
      snack.error("Usuário ou Senha Inválidos :( ");
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={3}>
        <Paper>
          <form onSubmit={handleSubmit}>
            <BoxTitle display="flex" justifyContent="center">
              <Title variant="h1">ADMIN</Title>
            </BoxTitle>
            <BoxContent>
              <TextField
                label="Usuário"
                name="username"
                onChange={(e) => handleChange(e, setState)}
                value={state.username}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Face />
                    </InputAdornment>
                  ),
                }}
                style={{ marginBottom: 10 }}
              />
              <TextField
                label="Senha"
                name="password"
                type="password"
                onChange={(e) => handleChange(e, setState)}
                value={state.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  ),
                }}
                style={{ marginBottom: 10 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                LOGIN
              </Button>
            </BoxContent>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default AdminAuth;
