import { CircularProgress, Fade, Grid } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Button } from 'components';
import { AppContext } from 'index';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { errorObjectConvert } from 'utils';
import Paper from './paper';

const CircularWrapper = styled('div')(({ theme }) => ({
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: '100%',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
}))

export default function MainForm({ model, noValidate, isModal, dontSet, state, setState, size, title, children }){
    const { id } = useParams();
    const { snack, dialog } = React.useContext(AppContext);
    const [loading, setLoad] = React.useState(false);

    const history = useHistory();
    
    function refreshData() {
      console.log(id)
        if (id !== 'novo' && model && !dontSet && !isModal) {
          console.log(id)
          setLoad(true);
          model
            .get(id)
            .then((data) => {
              let pageState = data;
              Object.keys(data).forEach((key) => {
                pageState = { ...pageState, [key]: data[key] };
              });
              setState((old) => ({ ...old, ...pageState, isRefresh: true }));
              setLoad(false);
            })
            .catch(() => {
                setLoad(false);
              dialog.showMessage(
                'Verifique sua conexão de internet, caso persista, favor consultar um administrador.',
                'Houve um erro ao processar solicitação.'
              );
              history.goBack();
            });
        }
      }
    
      React.useEffect(() => {
        refreshData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [id]);

      const DefaultGoBack = () => (
        <Box pl={isModal ? 2 : 0}>
          <Button
            variant="outlined"
            onClick={() => (isModal ? isModal(false) : history.goBack())}
          >
            {isModal ? 'Cancelar' : 'Voltar para Lista'}
          </Button>
        </Box>
      );

      const handleSubmit = (e) => {
        e.preventDefault();
        let body;
        if (id === 'novo') {
          body = { ...state };
        } else {
          body = { ...state, id };
        }
        model
          .save(body)
          .then((res) => {
            res
              ? snack.success('Criado com Sucesso!', 2000)
              : snack.error('Erro 400!', 1000);
            isModal ? isModal(false) : history.goBack();
          })
          .catch((err) => {
            console.log(err);
            dialog.showMessage(
              errorObjectConvert(err),
              'Houve um erro ao processar seu pedido'
            );
          });
      };
    

    const DefaultFinish = () => (
        <>
        {isModal ? (
            <Button
              type="button"
              variant="contained"
              onClick={handleSubmit}
              disabled={loading}
              color="primary"
            >
              Gravar
            </Button>
        ) : (
            <Button
              type="submit"
              disabled={loading}
              color="primary"
              variant="contained"
            >
            Gravar
            </Button>
        )}
        </>
    );
    return (
        <form
        noValidate={noValidate ? true : false}
        onSubmit={handleSubmit}
      >
          <Grid justify="center" container spacing={2}>
            <Grid item xs={size || 12}>
                <Paper customTitle={title}>
                    <Box p={2}>{children}</Box>
                    <Fade in={loading}>
                        <CircularWrapper>
                        <CircularProgress color="primary" />
                        </CircularWrapper>
                    </Fade>
                </Paper>
                <Box display="flex" pt={2}>
                    <Box flexGrow="1">
                        <DefaultGoBack />
                    </Box>
                    <Box>
                        <DefaultFinish />
                    </Box>
                </Box>
            </Grid>
          </Grid>
      </form>
    )
}
