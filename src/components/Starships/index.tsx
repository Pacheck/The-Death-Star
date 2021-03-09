import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

import { Container } from "./styles";
import { Starship } from "./types";
import CustomCard from "../CustomCard";
import shipImag from "../../assets/ships/ship1.png";

const Starships = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const fetchData = useApi();

  const fetchStarshipsData = async () => {
    const response = await fetchData("http://swapi.dev/api/starships/");
    console.log(response.results);
    setStarships(response.results);
  };

  useEffect(() => {
    fetchStarshipsData();
  }, []);

  return (
    <Container>
      {starships.map((ships) => (
        <CustomCard
          key={ships.name}
          text1={ships.name}
          text2={ships.crew}
          text3={ships.max_atmosphering_speed}
          text4={ships.cost_in_credits}
          imageLogo={shipImag}
        />
      ))}
    </Container>
  );
};

export default Starships;
