import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

import { Container } from "./styles";
import CustomCard from "../CustomCard";
import Logo from "../../assets/planets/MorakE15.png";
import { Planet } from "./types";

const Planets = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const fetchData = useApi();

  const fetchPlanetsData = async () => {
    const response = await fetchData("http://swapi.dev/api/planets/");
    console.log(response.results);
    setPlanets(response.results);
  };

  useEffect(() => {
    fetchPlanetsData();
  }, []);

  return (
    <Container>
      {planets.map((planet) => (
        <CustomCard
          key={planet.name}
          text1={planet.name}
          text2={planet.population}
          text3={planet.climate}
          text4={planet.terrain}
          imageLogo={Logo}
        />
      ))}
    </Container>
  );
};

export default Planets;
