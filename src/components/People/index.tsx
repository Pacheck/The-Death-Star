import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

import { Container } from "./styles";
import { Person } from "./types";
import starWarsLogo from "../../assets/logo/star-wars.svg";
import CustomCard from "../CustomCard";

const People = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const fetchData = useApi();

  const fetchPeopleData = async () => {
    const response = await fetchData("http://swapi.dev/api/people/");
    setPeople(response.results);
    console.log(response.results);
  };

  useEffect(() => {
    fetchPeopleData();
  }, []);

  return (
    <Container>
      {people.map((person) => (
        <CustomCard
          text1={person.name}
          text2={person.mass}
          text3={person.height}
          text4={person.birth_year}
          imageLogo={starWarsLogo}
        />
      ))}
    </Container>
  );
};

export default People;
