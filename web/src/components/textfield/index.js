import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import IntlCurrencyInput from "react-intl-currency-input";
import InputMask from "react-input-mask";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)(({ theme }) => ({
  // background: "white",
  // borderRadius: 15,
  // "& label.Mui-focused": {
  //   fontWeight: "bold",
  // },
  // "& label": {
  //   fontWeight: "bold",
  // },
  // "& .MuiInput-input": {
  //   fontWeight: "bold",
  // },
  // "& .MuiInput-underline:after": {
  //   borderBottomColor: "white",
  // },
  // "& .MuistandardInput-root": {
  //   borderRadius: 15,
  // },
  // "& .MuistandardInput-root:before": {
  //   borderBottom: "0px solid white",
  // },
  // "& .MuistandardInput-root:after": {
  //   borderRadius: 15,
  //   borderBottom: `none`,
  // },
  // "& .MuiInput-root:after": {
  //   borderRadius: 15,
  //   borderBottom: `none`,
  // },
  // "& .MuistandardInput-root:hover:before": {
  //   borderBottom: `2px solid ${theme.palette.primary[900]}`,
  //   borderRadius: 15,
  // },
}));

function textfield(props) {
  const {
    type,
    decimals,
    perc,
    name,
    normalize,
    mask,
    value,
    label,
    disabled,
    readOnly,
    inputRef,
    onChange,
    maskchar,
    children,
    id,
    money,
    variant,
    ...rest
  } = props;

  const inputProps = perc
    ? {
        startAdornment: <InputAdornment position="start"> % </InputAdornment>,
      }
    : {
        startAdornment: <InputAdornment position="start"> R$ </InputAdornment>,
      };

  const currencyConfig = {
    locale: "pt-BR",
    formats: {
      number: {
        BRL: {
          style: "decimal",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: decimals ? decimals : 2,
        },
      },
    },
  };

  if (mask) {
    return (
      <InputMask
        onChange={(e) =>
          normalize
            ? onChange({
                target: {
                  name: e.target.name,
                  value: e.target.value.replaceAll(normalize, ""),
                },
              })
            : onChange(e)
        }
        mask={mask}
        maskChar={maskchar ? maskchar : ""}
        disabled={disabled ? true : false}
        value={value}
      >
        {() => (
          <StyledTextField
            {...rest}
            inputRef={inputRef}
            label={label || children}
            disabled={disabled ? true : false}
            fullWidth
            name={name}
            variant={variant ? variant : "standard"}
            id={id || `custom-text-field-${name}`}
            value={value}
            InputProps={{
              readOnly: readOnly ? true : false,
            }}
          />
        )}
      </InputMask>
    );
  } else {
    if (money || perc) {
      return (
        <StyledTextField
          {...props}
          InputProps={{
            separator: ".",
            inputComponent: IntlCurrencyInput,
            readOnly: readOnly ? true : false,
            ...inputProps,
          }}
          inputProps={{
            currency: "BRL",
            config: currencyConfig,
          }}
          onChange={(e, v) =>
            onChange({
              target: {
                name: name,
                value: v,
              },
            })
          }
          variant={variant ? variant : "standard"}
          fullWidth
          id={name}
          {...rest}
        />
      );
    } else {
      return (
        <StyledTextField
          InputProps={{
            readOnly: readOnly ? true : false,
            ...props.InputProps,
          }}
          {...props}
          variant={variant ? variant : "standard"}
          fullWidth
          id={props.name}
          type={type || null}
          {...rest}
        />
      );
    }
  }
}

export default textfield;
