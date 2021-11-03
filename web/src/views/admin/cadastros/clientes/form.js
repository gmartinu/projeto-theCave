import { Grid } from "@mui/material";
import { ExpEndereco, MainForm, TextField } from "components";
import { C_Clientes } from "data/cadastros";
import React from "react";
import { handleChange } from "utils";

// import { Container } from './styles';

function FormClientes() {
  const [state, setState] = React.useState({
    cpf: "",
    enderecos: [{
      bairro: "",
      cep: "",
      cidade: "",
      complemento: "",
      endereco: "",
      estado: "",
      ibge: "",
      numero: "",
      observacao: "",
      pais: "Brasil",
      requst: true,
      uf: "RJ"
    }],
    cliente: true,
    cliente_ativo: true,
    data_nascimento: new Date(),
    email: "",
    func: false,
    funcionario_ativo: false,
    gerente: false,
    gerente_ativo: false,
    nome: "",
    sexo: 1,
    tel_cel: "",
    isRefresh: true,
  })

  return (
    <MainForm model={C_Clientes} state={state} setState={setState} title="Cadastro de Cliente">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField 
            label="CPF"
            value={state.cpf}
            setState={(e) => handleChange(e, setState)}
            name="cpf"
          />
        </Grid>
        <Grid item xs={12}>
          <ExpEndereco 
            state={state}
            setState={setState}
          />
        </Grid> 
      </Grid>
    </MainForm>
  )
}

export default FormClientes;
