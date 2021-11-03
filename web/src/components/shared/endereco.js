import { Grid } from '@mui/material';
import axios from 'axios';
import { Accordion, TextField } from 'components';
import { AppContext } from 'index';
import React from 'react';

// import { Container } from './styles';

function EnderecoExp({ state, setState }) {
  const { dialog } = React.useContext(AppContext);
  const NumeroRef = React.useRef(null);

  const handleChangeEndereco = (e) => {
    const { value, name } = e.target;
    return setState((_v) => ({
      ..._v,
      enderecos: [{ ..._v.enderecos[0], [name]: value }],
    }));
  };

  React.useEffect(() => {
    if (state.enderecos && state.enderecos[0].cep.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${state.enderecos[0].cep}/json/`)
        .then((response) => {
          if (response.data.erro) {
            dialog.showMessage(
              'Impossível Realizar Preenchimento automático',
              'CEP Inválido'
            );
          } else {
            setState((_v) => ({
              ..._v,
              enderecos: [
                {
                  ..._v.enderecos[0],
                  endereco: response.data.logradouro,
                  complemento: response.data.complemento,
                  uf: response.data.uf,
                  bairro: response.data.bairro,
                  cidade: response.data.localidade,
                  ibge: response.data.ibge,
                },
              ],
            }));
            NumeroRef.current.focus();
          }
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.enderecos[0].cep]);

  return (
    <Accordion title="Endereço" startExpanded>
            <Grid container spacing={2}>
      <Grid item xs={2}>
        <TextField
          label="CEP"
          mask="99.999-999"
          normalize={/[-.]/g}
          onChange={handleChangeEndereco}
          name="cep"
          value={state.enderecos[0].cep}
        />
      </Grid>
      <Grid item xs={7}>
        <TextField
          label="Logradouro"
          onChange={handleChangeEndereco}
          name="endereco"
          value={state.enderecos[0].endereco}
        />
      </Grid>
      <Grid item xs={1}>
        <TextField
          label="Número"
          mask="999999"
          inputRef={NumeroRef}
          onChange={handleChangeEndereco}
          name="numero"
          value={state.enderecos[0].numero}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Bairro"
          onChange={handleChangeEndereco}
          name="bairro"
          value={state.enderecos[0].bairro}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="Cidade"
          onChange={handleChangeEndereco}
          name="cidade"
          value={state.enderecos[0].cidade}
        />
      </Grid>
      <Grid item xs={1}>
      <TextField
          label="UF"
          onChange={handleChangeEndereco}
          name="uf"
          value={state.enderecos[0].uf}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Email"
          onChange={handleChangeEndereco}
          name="email"
          value={state.enderecos[0].email}
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          label="Observações"
          onChange={handleChangeEndereco}
          name="observacao"
          value={state.enderecos[0].observacao}
        />
      </Grid>
    </Grid>
    </Accordion>
  );
}

export default EnderecoExp;
