import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

import { Container } from "./styles";
import { Planet } from "./types";

const Planets = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const fetchData = useApi();

  const fetchPlanetsData = async () => {
    const response = await fetchData("http://swapi.dev/api/planets/");
    setPlanets(response.results);
  };

  useEffect(() => {
    fetchPlanetsData();
  }, []);

  return (
    <Container>
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>{planet.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Planets;
