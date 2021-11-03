/* eslint-disable no-unused-vars */
import {
    Box,
    CircularProgress,
    Fade,
    Paper,
    Typography,
  } from '@mui/material';
  import { Button } from 'components';
  import React from 'react';
  import { getActiveRoute, hexToRgb } from 'utils';
  import { goToAddPage } from 'utils/go2AddPage';
  import { useParams } from 'react-router-dom';
  import { styled } from '@mui/system';
import { AdminRotes } from 'routes';

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
  
  const TypographyTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 300,
    position: 'relative',
  }))
  
  function FormPaper({
    formTitle,
    customTitle,
    path,
    history,
    disableInclude,
    isModal,
    ...props
  }) {
    const { id } = useParams();
    // eslint-disable-next-line no-unused-vars
    const [animation, setAnimation] = React.useState(false);
  
    React.useEffect(() => {
      if (!animation) {
        // setTimeout(() => {
        setAnimation(true);
        // }, 100);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const ListIcon = getActiveRoute(AdminRotes).Icon;
  
    return (
      <div>
        {isModal ? (
          <>{props.children}</>
        ) : (
          <>
            {/* <Collapse in={animation} unmountOnExit> */}
            <Paper
              style={props.minHeight ? { minHeight: 500 } : {}}
            >
              <Fade in={props.loading} style={{ zIndex: 1 }}>
                <CircularWrapper>
                  <CircularProgress color="primary" />
                </CircularWrapper>
              </Fade>
              <Box display="flex" pl={2} pr={2} pt={2}>
                <Box flexGrow={1}>
                  <TypographyTitle variant="h5">
                    {customTitle
                      ? customTitle
                      : `${
                          id === 'novo' || !isNaN(id) ? 'Inclusão' : 'Lista'
                        } de ${getActiveRoute().name}`}
                  </TypographyTitle>
                </Box>
                {formTitle ? (
                  <Box>
                    <Button
                      disabled={disableInclude}
                      onClick={() => goToAddPage('novo', path, history)}
                    >
                      Incluir
                    </Button>
                  </Box>
                ) : null}
              </Box>
              {props.children}
            </Paper>
          </>
        )}
      </div>
    );
  }
  
  export default FormPaper;
  