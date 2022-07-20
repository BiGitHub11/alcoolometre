import React from "react";
import moment from "moment";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Fonction Résultat avec comme props les données utilisateurs
export default function Resultat({ formData, setFormData }) {
  // Définis le genre de l'utilisateur pour attribuer la valeur K
  const getGenre = () => {
    return formData.genre === "H" ? 0.68 : 0.55;
  };
  // Calcul la quantité d'alcool dans le sang de l'utilisateur
  const getQa = () => {
    return formData.bonusboissoncl === 0 && formData.bonusboissondegre === 0
      ? (0.8 * formData.boissoncl * formData.boissondegre) / 100
      : (0.8 * formData.boissoncl * formData.boissondegre) / 100 +
          (0.8 * formData.bonusboissoncl * formData.bonusboissondegre) / 100;
  };

  //Compte le taux d'alcoolmie chez l'utilisation
  const getTa = () => {
    return getQa() / (formData.poids * getGenre());
  };

  // Compte l'heure actuel
  const getTime = () => {
    let timeNow = new Date();
    let currTime = "";
    currTime = timeNow.getHours();
    return currTime;
  };

  const getSobre = () => {
    let txgenre;
    txgenre = getGenre() === 0.68 ? 0.125 : 0.0925;
    let x = getTa();
    let nbreHeure;
    for (nbreHeure = 0; x >= 0.5; nbreHeure++) {
      x = -txgenre;
    }
    console.log(getTime() + 1);
    return getTime() + nbreHeure;
  };

  // Switch qui permet de d'afficher un display selon l'état de l'utilisateur
  const AlcoolReponse = () => {
    switch (true) {
      case getTa() < 0.5:
        return (
          <Card sx={{ maxWidth: 345, mx: "auto" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bravo {formData.prenom}, tu as été raisonnable.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tu peux rentrer sereinement.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      case getTa() >= 0.5 && getTa() < 1:
        return (
          <Card sx={{ maxWidth: 345, mx: "auto" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tu as trop bu {formData.prenom} !
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Il va falloir appeller un taxi ou patienter jusqu'à
                  {" " + getSobre()}h.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      case getTa() >= 1 && getTa() < 2:
        return (
          <Card sx={{ maxWidth: 345, mx: "auto" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tu devrais boire beaucoup moins {formData.prenom} !
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Il va falloir appeler un taxi ou patienter jusqu'à
                  {" " + getSobre()}h.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      case getTa() >= 2 && getTa() < 3:
        return (
          <Card sx={{ maxWidth: 345, mx: "auto" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tu es totalement ivre {formData.prenom} !
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Appel un ami ou dors sur place !
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      case getTa() >= 3 && getTa() < 5:
        return (
          <Card sx={{ maxWidth: 345, mx: "auto" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tu es au bord du coma éthylique ivre {formData.prenom} !
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Appelles les urgences !
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      case getTa() >= 5:
        return (
          <Card sx={{ maxWidth: 345, mx: "auto" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  RIP {formData.prenom} !
                </Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      default:
        return (
          <Card sx={{ maxWidth: 345, mx: "auto" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Erreur {formData.prenom} !
                </Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
    }
  };
  return (
    <div>
      <div>Votre taux d'alcoolémie</div>
      {AlcoolReponse()}
    </div>
  );
}
