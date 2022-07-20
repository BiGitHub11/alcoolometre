import React from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function Genre({ formData, setFormData }) {
  return (
    <div>
      <FormControl size="small" variant="standard" sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Choisir votre genre
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={formData.genre}
          onChange={(event) =>
            setFormData({ ...formData, genre: event.target.value })
          }
        >
          <MenuItem value={"H"}>Homme</MenuItem>
          <MenuItem value={"F"}>Femme</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
