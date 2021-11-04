import { Delete } from "@mui/icons-material";
import { FormControl, Grid, Select, InputLabel, MenuItem, Table, TableHead, TableCell, TableRow, TableBody, IconButton } from "@mui/material";
import { Button, DatePicker, MainForm, TextField } from "components";
import { C_Agendamentos, C_Clientes, C_Funcionarios, C_Servicos } from "data/cadastros";
import React from "react";
import { handleChange } from "utils";

// import { Container } from './styles';

function FormAgendamentos() {
  const [state, setState] = React.useState({
    cliente: '',
    funcionario: '',
    data: new Date(),
    pagamentos: {
      valor_pago: '0,00',
    },
    servico: '',
    servicos: [],
    status: 1
  });

  const {data: clientes } = C_Clientes.useModel({
    pageSize: 9999,
  });
  
  const {data: funcionarios } = C_Funcionarios.useModel({
    pageSize: 9999,
  });
  
  const {data: servicos } = C_Servicos.useModel({
    pageSize: 9999,
  });

  const handleAdd = () => {
    const _temp = [...state.servicos];
    const _servico = servicos.rows.find(r => r.id === state.servico);
    _temp.push(_servico)
    setState(_v => ({
      ..._v,
      servicos: _temp
    }))
  }
  
  const handleRemove = (id) => {
    const _temp = [...state.servicos];
    _temp.splice(id, 1)
    setState(_v => ({
      ..._v,
      servicos: _temp
    }))
  }

  const handleChangePag = (e) => {
    const { value } = e.target;
    setState(_v => ({
      ..._v,
      pagamentos: {
        valor_pago: state.servicos.sumBy("valor") <= value ? state.servicos.sumBy("valor") : value
      }
    }))
  }

  React.useEffect(() => {
    if(state.servicos.sumBy("valor") <= state.pagamentos?.valor_pago){
      setState(_v => ({
        ..._v,
        pagamentos: {
          valor_pago: state.servicos.sumBy("valor")
        }
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.servicos.length])

  return (
    <MainForm model={C_Agendamentos} state={state} setState={setState} title="Cadastro de Agendamentos">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl fullWidth variant='standard'>
            <InputLabel>Cliente</InputLabel>
            <Select
              MenuProps={{
                PaperProps: {
                  style: {
                    height: 350
                  }
                },
              }}
              value={state.cliente}
              onChange={(e) => handleChange(e, setState)}
              inputProps={{ name: "cliente" }}
              label="Cliente"
            >
              {clientes?.rows.map((row, index) => (
                <MenuItem value={row.id} key={index}>
                  {row.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth variant='standard'>
            <InputLabel>Funcionário</InputLabel>
            <Select
              MenuProps={{
                PaperProps: {
                  style: {
                    height: 350
                  }
                },
              }}
              value={state.funcionario}
              onChange={(e) => handleChange(e, setState)}
              inputProps={{ name: "funcionario" }}
              label="Funcionário"
            >
              {funcionarios?.rows.map((row, index) => (
                <MenuItem value={row.id} key={index}>
                  {row.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <DatePicker
            label="Data"
            value={state.data}
            name="data"
            onChange={(e) => handleChange(e, setState)}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth variant='standard'>
            <InputLabel>Status</InputLabel>
            <Select
              value={state.status}
              onChange={(e) => handleChange(e, setState)}
              inputProps={{ name: "status" }}
              label="Status"
            >
              <MenuItem value={1}>
                Pendente
              </MenuItem>
              <MenuItem value={2}>
                Em andamento
              </MenuItem>
              <MenuItem value={3}>
                Aguardando Pagamentos
              </MenuItem>
              <MenuItem value={4}>
                Concluído
              </MenuItem>
              <MenuItem value={5}>
                Cancelado
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth variant='standard'>
            <InputLabel>Serviço</InputLabel>
            <Select
              value={state.servico}
              onChange={(e) => handleChange(e, setState)}
              inputProps={{ name: "servico" }}
              label="Serviço"
            >
              {servicos?.rows.map((row, index) => (
                <MenuItem value={row.id} key={index}>
                  {row.descricao}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid display="flex" item xs={2}>
          <Button onClick={handleAdd} color="primary" variant="contained">
            Incluir
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Descrição</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell align="center">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.servicos.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.descricao}</TableCell>
                  <TableCell>{item.valor.toBRL()}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      onClick={(e) => handleRemove(index)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={2}>
          <TextField 
            label="Valor P/ Pagar"
            value={state.servicos.sumBy("valor").toBRL()}
          /> 
        </Grid>
        <Grid item xs={2}>
          <TextField 
            label="Valor Pago"
            value={state.pagamentos?.valor_pago}
            name="valor_pago"
            onChange={(e) => handleChangePag(e)}
            money
          />
        </Grid>
      </Grid>
    </MainForm>
  )
}

export default FormAgendamentos;
