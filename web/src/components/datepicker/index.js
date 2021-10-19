import React from "react";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { TextField } from "components";

// import { Container } from './styles';

function datepicker({ time, label, value, onChange, name }) {
  const MainComponent = time ? DateTimePicker : DesktopDatePicker;

  const handleChange = (newValue) => {
    onChange({
      target: {
        name: name,
        value: newValue,
      },
    });
  };

  const inputFormat = time ? "" : "DD/MM/YYYY";

  return (
    <MainComponent
      label={label}
      inputFormat={inputFormat}
      value={value}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

export default datepicker;
