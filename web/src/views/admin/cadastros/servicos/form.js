import { Grid } from '@mui/material';
import { MainForm, TextField } from 'components';
import { C_Servicos } from 'data/cadastros';
import React from 'react';
import { handleChange } from 'utils';

export default function FormServicos(){
    const [state, setState] = React.useState({
        descricao: "",
        valor: ""
    });

    return (
        <MainForm model={C_Servicos} state={state} setState={setState} title="Cadastro de Serviços">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField 
                        label="Descrição"
                        name="descricao"
                        value={state.descricao}
                        onChange={(e) => handleChange(e, setState)}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        label="Valor"
                        name="valor"
                        value={state.valor}
                        onChange={(e) => handleChange(e, setState)}
                        money
                    />
                </Grid>
            </Grid>
        </MainForm>
    )
}