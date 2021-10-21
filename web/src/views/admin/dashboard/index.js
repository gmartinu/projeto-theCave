import { AssignmentInd, ManageAccounts, Person } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { DashCard } from "components";
import { C_Clientes, C_Funcionarios, C_Gerentes } from "data/cadastros";
import React from "react";

// import { Container } from './styles';

function DashBoard() {
  const { data: listClientes } = C_Clientes.useModel();
  const { data: listFuncionarios } = C_Funcionarios.useModel();
  const { data: listGerentes } = C_Gerentes.useModel();

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <DashCard title="Clientes" value={listClientes?.count} Icon={Person} />
      </Grid>
      <Grid item xs={4}>
        <DashCard
          title="Funcionários"
          value={listFuncionarios?.count}
          Icon={AssignmentInd}
        />
      </Grid>
      <Grid item xs={4}>
        <DashCard
          title="Gerentes"
          value={listGerentes?.count}
          Icon={ManageAccounts}
        />
      </Grid>
    </Grid>
  );
}

export default DashBoard;
