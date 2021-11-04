import React from 'react';
import { Checkbox, FormControlLabel, Switch } from '@mui/material';

export default function CheckedBox(props) {
  const MainControl = props.tipo === 'switch' ? Switch : Checkbox;
  const { style, ...rest } = props;
  return (
    <FormControlLabel
      style={{
        color: 'black',
        ...style,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
      }}
      control={
        <MainControl
          {...rest}
          color="primary"
          onChange={(e) =>
            props.onChange({
              ...e,
              target: {
                name: e.target.name,
                value: e.target.checked,
              },
            })
          }
        />
      }
      label={props.label}
    />
  );
}
