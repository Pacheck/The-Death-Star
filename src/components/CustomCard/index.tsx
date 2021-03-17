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
import { handleViewData } from "../../helpers/filterCustomData";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 320,
    minHeight: 300,
    margin: "10px 5px",
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

  const handleFilterData = () => {
    const filteredData = handleViewData({ data, imageLogo });
    setDados(filteredData);
  };

  const handleNavigateToDetails = () => {
    const { url } = data;
    const newURL = url.replace("http://swapi.dev/api", "");
    history.push(`/details${newURL}`);
  };

  useEffect(() => {
    handleFilterData();
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
