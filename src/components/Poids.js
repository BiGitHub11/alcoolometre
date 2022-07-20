import React from "react";
import Input from "@mui/material/Input";

export default function Poids({ formData, setFormData }) {
  return (
    <div>
      <Input
        sx={{ m: 2 }}
        label="Votre poids"
        type="number"
        placeholder="Votre poids"
        value={formData.poids}
        onChange={(event) =>
          setFormData({ ...formData, poids: event.target.value })
        }
      />
    </div>
  );
}
