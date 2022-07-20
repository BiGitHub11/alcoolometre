import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Prenom from "./Prenom.js";
import Genre from "./Genre.js";
import Boissons from "./Boissons.js";
import Heure from "./Heure.js";
import Resultat from "./Resultat.js";
import Poids from "./Poids.js";
import Box from "@mui/material/Box";
import BorderLinearProgress from "@mui/material/LinearProgress";

// Création d'un style à partir du theme de base de material-ui pour faire le css des Item
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  margin: theme.spacing(2),
  color: theme.palette.text.primary
}));

//Fonction Alcoolometre
export default function Alcoolometre() {
  const [step, setStep] = useState(0);
  const steps = [
    "Prénom",
    "Genre(H/F)",
    "Poids",
    "Boisson(s) Alcoolisé(s)",
    "Heure",
    "Résultat"
  ];
  // Création d'attributs et de leur état
  const [formData, setFormData] = useState({
    prenom: "",
    genre: "",
    poids: 0,
    boissoncl: 0,
    boissondegre: 0,
    bonusboissoncl: 0,
    bonusboissondegre: 0,
    dateheure: [new Date("2022-07-00T00:00")]
  });
  // Permet de se situer sur la page ouverte par l'utilisateur et lui afficher le contenu approprié avec en paramètre les props
  const StepDisplayHTML = () => {
    switch (step) {
      case 0:
        return <Prenom formData={formData} setFormData={setFormData} />;
      case 1:
        return <Genre formData={formData} setFormData={setFormData} />;
      case 2:
        return <Poids formData={formData} setFormData={setFormData} />;
      case 3:
        return <Boissons formData={formData} setFormData={setFormData} />;
      case 4:
        return <Heure formData={formData} setFormData={setFormData} />;
      case 5:
        return <Resultat formData={formData} setFormData={setFormData} />;
      default:
        return <Prenom formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Item>
          <h1>Alcoolometre</h1>
          <p>
            Vous avez bus quelques verres, vous vous demandez si vous êtes aptes
            à conduire, l'Alcoolometre est là pour calculer votre taux
            d'alcoolémie.
          </p>
        </Item>
      </Grid>
      <Grid item xs={12} md={12}>
        <Item>
          <Box sx={{ mx: 2 }}>
            <br />
            <BorderLinearProgress
              variant="determinate"
              value={
                step === 0
                  ? 16.66
                  : step === 1
                  ? 33.32
                  : step === 2
                  ? 49.98
                  : step === 3
                  ? 66.64
                  : step === 4
                  ? 83.3
                  : 100
              }
            />
          </Box>
          <h2>{steps[step]}</h2>

          {StepDisplayHTML()}
          {step !== 5 ? (
            <div>
              <Button
                sx={{ m: 1, maxWidth: 110 }}
                hidden={true}
                disabled={step === 0}
                variant="contained"
                onClick={() => setStep((currStep) => currStep - 1)}
              >
                Précèdent
              </Button>
              <Button
                sx={{ m: 1, minWidth: 110 }}
                variant="contained"
                onClick={() => {
                  if (step === steps.length - 2) {
                    setStep(5);
                  } else {
                    setStep((currStep) => currStep + 1);
                  }
                }}
              >
                {step === steps.length - 2 ? "Calculer" : "Suivant"}
              </Button>
            </div>
          ) : (
            <Button
              sx={{ m: 1, minWidth: 110 }}
              variant="contained"
              onClick={() => {
                setFormData({
                  prenom: "",
                  genre: "",
                  poids: 0,
                  boissoncl: 0,
                  boissondegre: 0,
                  bonusboissoncl: 0,
                  bonusboissondegre: 0,
                  dateheure: [new Date("2022-07-00T00:00")]
                });
                setStep(0);
              }}
            >
              Recommencer
            </Button>
          )}
        </Item>
      </Grid>
    </Grid>
  );
}
