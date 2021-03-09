import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import starWarsLogo from "../../assets/logo/star-wars-2.svg";
import { FilmData } from "./types";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const FilmCard = ({
  title,
  director,
  release_date,
  opening_crawl,
}: FilmData) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={starWarsLogo}
            title="A star war film"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              {director}
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
              {release_date}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {opening_crawl}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default FilmCard;
