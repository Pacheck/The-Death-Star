import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

const Home = () => {
  const history = useHistory();

  const handleNavigate = (path: string) => {
    history.push(path);
  };

  return (
    <Container>
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleNavigate("/films")}
      >
        Films
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleNavigate("/people")}
      >
        People
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleNavigate("/planets")}
      >
        Planets
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleNavigate("/species")}
      >
        Species
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleNavigate("/starships")}
      >
        Starships
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => handleNavigate("/vehicles")}
      >
        Vehicles
      </Button>
    </Container>
  );
};

export default Home;
