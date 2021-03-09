import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardData } from "./types";

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
});

const DinamicCard = ({ text1, text2, text3, text4, imageLogo }: CardData) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageLogo}
          title="StarWars Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {text1}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            {text2}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {text3}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text4}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DinamicCard;
