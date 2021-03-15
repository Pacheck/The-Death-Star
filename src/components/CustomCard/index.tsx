import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Skeleton from "@material-ui/lab/Skeleton";

import { PropData, Dados } from "./types";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 320,
    marginTop: 20,
    margin: 10,
    border: "1px solid lightgray",
  },
  media: {
    height: 140,
  },
  text: {
    marginBottom: 6,
  },
});

const DinamicCard = ({ data, imageLogo, isLoading }: PropData) => {
  const [dados, setDados] = useState<Dados>();
  const classes = useStyles();

  const history = useHistory();

  const handleViewData = () => {
    setDados({
      text1: data.name || data.title || "unknown",
      text2:
        data.director ||
        data.mass ||
        data.population ||
        data.classification ||
        data.crew ||
        data.model ||
        "unknown",
      text3:
        data.release_date ||
        data.height ||
        data.climate ||
        data.language ||
        data.max_atmosphering_speed ||
        data.vehicle_class ||
        "unknown",
      text4:
        data.opening_crawl ||
        data.birth_year ||
        data.terrain ||
        data.skin_colors ||
        data.cost_in_credits ||
        data.cost_in_credits ||
        "unknown",
      imageLogo: imageLogo,
    });
  };

  const handleNavigateToDetails = () => {
    const { url } = data;
    const newURL = url.replace("http://swapi.dev/api", "");
    history.push(`/details${newURL}`);
  };

  useEffect(() => {
    handleViewData();
  }, []);

  return (
    <>
      {!!dados && (
        <Card className={classes.root} onClick={handleNavigateToDetails}>
          <CardActionArea>
            {isLoading ? (
              <Skeleton
                animation="wave"
                variant="rect"
                className={classes.media}
              />
            ) : (
              <CardMedia
                className={classes.media}
                image={dados.imageLogo}
                title="StarWars Logo"
              />
            )}
            <CardContent>
              {isLoading ? (
                <>
                  <Skeleton
                    animation="wave"
                    height={10}
                    className={classes.text}
                    width="50%"
                  />
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="70%"
                    className={classes.text}
                  />
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="40%"
                    className={classes.text}
                  />
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    className={classes.text}
                  />
                </>
              ) : (
                <>
                  <Typography gutterBottom variant="h5" component="h2">
                    {dados.text1}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h4">
                    {dados.text2}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h6">
                    {dados.text3}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {dados.text4}
                  </Typography>
                </>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default DinamicCard;
