import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

import { Container } from "./styles";
import { Specie } from "./types";

const Species = () => {
  const [species, setSpecies] = useState<Specie[]>([]);
  const fetchData = useApi();

  const fetchPlanetData = async () => {
    const response = await fetchData("http://swapi.dev/api/species/");
    setSpecies(response.results);
  };

  useEffect(() => {
    fetchPlanetData();
  }, []);

  return (
    <Container>
      <ul>
        {species.map((specie) => (
          <li key={specie.name}>{specie.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Species;
