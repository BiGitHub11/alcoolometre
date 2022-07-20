import React from "react";
import Input from "@mui/material/Input";
export default function Prenom({ formData, setFormData }) {
  return (
    <div>
      <Input
        sx={{ m: 2 }}
        type="text"
        placeholder="Votre prénom"
        value={formData.prenom}
        onChange={(event) =>
          setFormData({ ...formData, prenom: event.target.value })
        }
      />
    </div>
  );
}
