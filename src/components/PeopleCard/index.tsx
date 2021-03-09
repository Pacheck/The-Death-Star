import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import starWarsLogo from "../../assets/logo/star-wars.svg";

import { Person } from "./types";
import { Container } from "./styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PeopleCard = ({ name, mass, height, birth_year }: Person) => {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={starWarsLogo}
            title="Person from Sw films"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              {mass}
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
              {height}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {birth_year}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default PeopleCard;
