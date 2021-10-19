import { Face, LockOutlined } from "@mui/icons-material";
import { Grid, InputAdornment, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Paper, TextField } from "components";
import React from "react";
import { handleChange } from "utils";

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
  padding: theme.spacing(0, 4, 2, 4),
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "white",
  size: theme.spacing(8),
  fontSize: 70,
  fontWeight: "bold",
}));

function AdminAuth() {
  const [state, setState] = React.useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
              />
            </BoxContent>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default AdminAuth;
