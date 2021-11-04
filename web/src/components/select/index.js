import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const DefaultSelect = (props) => {
  const { onChange, label, options, value, name, disabled, variant } = props;
  return (
    <FormControl fullWidth variant={variant || 'standard'}>
      <InputLabel>{label}</InputLabel>
      <Select
        disabled={disabled}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
        }}
        value={value}
        onChange={onChange}
        inputProps={{ name: name }}
        label={label}
      >
        {options.map((option, index) =>
          option ? (
            <MenuItem value={option.value} key={index}>
              {option.label}
            </MenuItem>
          ) : null
        )}
      </Select>
    </FormControl>
  );
};

export default DefaultSelect;
