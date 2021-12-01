import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  Button,
  CheckBox,
  DatePicker,
  ExpEndereco,
  Select,
  TextField,
} from "components";
import { C_Clientes } from "data/cadastros";
import { AppContext } from "index";
import React from "react";
import { handleChange } from "utils";

function HomePage() {
  const { snack } = React.useContext(AppContext);
  const [cadastro, setCadastro] = React.useState(false);
  const [agendamento, setAgendamento] = React.useState(false);

  const [state, setState] = React.useState({
    cpf: "",
    enderecos: [
      {
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
        uf: "RJ",
      },
    ],
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((_v) => ({
      ..._v,
      [name]:
        name === "data_nascimento"
          ? new Date(value).format("YYYY-MM-DD")
          : value,
    }));
  };

  const RealizarCadastro = () => {
    setCadastro(true);
  };

  const RealizarAgendamento = () => {
    setAgendamento(true);
  };

  return (
    <Grid container style={{ display: "flex", justifyContent: "center" }}>
      <Grid item xs={8}>
        <Paper style={{ padding: 16 }}>
          {!cadastro && !agendamento ? (
            <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => RealizarCadastro()}
                style={{ padding: 16 }}
              >
                Realizar Cadastro
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => RealizarAgendamento()}
                style={{ padding: 16 }}
              >
                Realizar Agendamento
              </Button>
            </Box>
          ) : null}
          {cadastro && !agendamento ? (
            <Grid container spacing={2}>
              <Grid item xs={3}>
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
                    { label: "Masculino", value: 1 },
                    { label: "Feminino", value: 2 },
                    { label: "Outro", value: 3 },
                    { label: "Indefinido", value: 4 },
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
                <ExpEndereco state={state} setState={setState} />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12}></Grid>
            </Grid>
          )}
        </Paper>
        {agendamento || cadastro ? (
          <Box display="flex">
            <Box flexGrow={1}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCadastro(false);
                  setAgendamento(false);
                }}
                style={{ marginTop: 8 }}
              >
                {" "}
                Voltar{" "}
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  if (cadastro) {
                    C_Clientes.save(state)
                      .then((res) => {
                        snack.success("Cadastrado Com sucesso!");
                        setCadastro(false);
                      })
                      .catch((err) => snack.error(err?.message));
                  }
                  if (agendamento) {
                    setAgendamento(false);
                  }
                }}
                style={{ marginTop: 8 }}
              >
                {cadastro ? "salvar" : "Agendar"}
              </Button>
            </Box>
          </Box>
        ) : null}
      </Grid>
    </Grid>
  );
}

export default HomePage;
