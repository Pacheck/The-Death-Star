import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

import { Container } from "./styles";
import Logo from "../../assets/logo/star-wars-4.svg";
import CustomCard from "../CustomCard";
import { Specie } from "./types";

const Species = () => {
  const [species, setSpecies] = useState<Specie[]>([]);
  const fetchData = useApi();

  const fetchPlanetData = async () => {
    const response = await fetchData("http://swapi.dev/api/species/");
    setSpecies(response.results);
    console.log(response.results);
  };

  useEffect(() => {
    fetchPlanetData();
  }, []);

  return (
    <Container>
      {species.map((specie) => (
        <CustomCard
          key={specie.name}
          text1={specie.name}
          text2={specie.classification}
          text3={specie.language}
          text4={specie.skin_colors}
          imageLogo={Logo}
        />
      ))}
    </Container>
  );
};

export default Species;
