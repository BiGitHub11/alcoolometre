import React, { useState } from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

export default function Boissons({ formData, setFormData }) {
  // Permet de créer les attributs qui permettront un état à la checkbox et aussi son changement d'état
  const [checked, setChecked] = useState(false);

  // Event active sur le OnChange de la checkbox pour connaître l'état du checkbox
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <div>
        <InputLabel>Quelle quantité d'alcool as-tu bu en cl ?</InputLabel>
        <Input
          sx={{ m: 2 }}
          type="number"
          value={formData.boissoncl}
          placeholder="50"
          onChange={(event) =>
            setFormData({ ...formData, boissoncl: event.target.value })
          }
        />
      </div>
      <div>
        <InputLabel>A combien de degré ?</InputLabel>
        <Input
          sx={{ m: 2 }}
          type="number"
          value={formData.boissondegre}
          placeholder="90"
          onChange={(event) =>
            setFormData({ ...formData, boissondegre: event.target.value })
          }
        />
      </div>
      <div>
        <FormGroup>
          <FormControlLabel
            sx={{ m: "auto" }}
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label="Ajouter une autre boisson"
          />
        </FormGroup>
        {checked && (
          <div>
            <div>
              <InputLabel>Quelle quantité d'alcool as-tu bu en cl ?</InputLabel>
              <Input
                sx={{ m: 2 }}
                type="number"
                value={formData.bonusboissoncl}
                placeholder="90"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    bonusboissoncl: event.target.value
                  })
                }
              />
            </div>
            <div>
              <InputLabel>A combien de degré ?</InputLabel>
              <Input
                sx={{ m: 2 }}
                type="number"
                value={formData.bonusboissondegre}
                placeholder="90"
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    bonusboissondegre: event.target.value
                  })
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
