import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";

export default function Heure({ formData, setFormData }) {
  return (
    <div>
      <InputLabel>Quand as tu bu pour la dernière fois ?</InputLabel>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={2}>
          <DateTimePicker
            ampm={false}
            renderInput={(params) => <TextField {...params} />}
            value={formData.dateheure}
            onChange={(event) => setFormData({ ...formData, dateheure: event })}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
