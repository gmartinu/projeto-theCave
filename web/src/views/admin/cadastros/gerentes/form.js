import { Grid } from "@mui/material";
import { CheckBox, DatePicker, ExpEndereco, MainForm, Select, TextField } from "components";
import { C_Gerentes } from "data/cadastros";
import React from "react";
import { handleChange } from "utils";

// import { Container } from './styles';

function FormGerentes() {
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
    cliente: false,
    cliente_ativo: false,
    data_nascimento: new Date(),
    email: "",
    func: true,
    funcionario_ativo: true,
    gerente: false,
    gerente_ativo: false,
    nome: "",
    sexo: 1,
    tel_cel: "",
    isRefresh: true,
  })

  return (
    <MainForm model={C_Gerentes} state={state} setState={setState} title="Cadastro de Gerentes">
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <CheckBox 
            label="Ativo"
            name="cliente_ativo"
            checked={state.cliente_ativo}
            onChange={(e) => handleChange(e, setState)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField 
            label="CPF"
            value={state.cpf}
            onChange={(e) => handleChange(e, setState)}
            name="cpf"
            mask={"999.999.999-99"}
            maskChar=""
          />
        </Grid>
        <Grid item xs={5}>
          <TextField 
            label="Nome"
            value={state.nome}
            onChange={(e) => handleChange(e, setState)}
            name="nome"
          />
        </Grid>
        <Grid item xs={2}>
          <DatePicker 
            label="Data de Nascimento"
            value={state.data_nascimento}
            name="data_nascimento"
            onChange={(e) => handleChange(e, setState)}
          />
        </Grid>
        <Grid item xs={2}>
          <Select 
            label="Sexo"
            value={state.sexo}
            name="sexo"
            onChange={(e) => handleChange(e, setState)}
            options={[
              {label: "Masculino", value: 1},
              {label: "Feminino", value: 2},
              {label: "Outro", value: 3},
              {label: "Indefinido", value: 4},
            ]}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField 
            label="Celular"
            value={state.tel_cel}
            onChange={(e) => handleChange(e, setState)}
            name="tel_cel"
            mask="(99) 99999-9999"
            maskChar=""
          />
        </Grid>
        <Grid item xs={4}>
          <TextField 
            label="Email"
            value={state.email}
            onChange={(e) => handleChange(e, setState)}
            name="email"
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

export default FormGerentes;
