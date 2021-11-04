/* eslint-disable no-fallthrough */
import { ArrowDropDown } from '@mui/icons-material';
import { Autocomplete, } from 'components';
import { C_Clientes, C_Funcionarios, C_Gerentes } from 'data/cadastros';
import React from 'react';
import { handleChange } from 'utils';

// import { Container } from './styles';

function UniversalAuto({
  name,
  value,
  label,
  onChange,
  setState,
  params,
  helperText,
  disabled,
  fieldName,
  filter,
  rest,
  readOnly,
}) {
  const [inState, setInState] = React.useState({
    option: '',
    model: C_Clientes,
    name: '',
  });

  React.useEffect(() => {
    let _option = 'nome',
      _model = C_Clientes,
      _name = '';

    switch (name) {
      case 'cliente':
        _model = C_Clientes;
        break;
      case 'funcionario':
        _model = C_Funcionarios;
        break;
      case 'gerente':
        _model = C_Gerentes;
        break;
      default:
        break;
    }
    setInState((_v) => ({
      ..._v,
      model: _model,
      option: _option,
      name: _name,
    }));
  }, [name]);

  return (
    <Autocomplete
      readOnly={readOnly ? readOnly : false}
      getOptionLabel={inState.option}
      valueKey="id"
      label={label}
      name={fieldName ? fieldName : name}
      value={Number(value)}
      onChange={(e, o) =>
        onChange ? onChange(e, o) : handleChange(e, setState)
      }
      model={inState.model}
      params={params}
      helperText={helperText}
      disabled={disabled}
      filter={filter}
      popupIcon={rest ? <> </> : <ArrowDropDown />}
    />
  );
}

export default UniversalAuto;
