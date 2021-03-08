import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

import { Container } from "./styles";
import { Starship } from "./types";

const Starships = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const fetchData = useApi();

  const fetchStarshipsData = async () => {
    const response = await fetchData("http://swapi.dev/api/starships/");
    setStarships(response.results);
  };

  useEffect(() => {
    fetchStarshipsData();
  }, []);

  return (
    <Container>
      <ul>
        {starships.map((ships) => (
          <li key={ships.name}>{ships.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Starships;
