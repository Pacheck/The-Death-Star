import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import PeopleCard from "../PeopleCard";
import { Container } from "./styles";
import { Person } from "./types";

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
        <PeopleCard
          name={person.name}
          mass={person.mass}
          height={person.height}
          birth_year={person.birth_year}
        />
      ))}
    </Container>
  );
};

export default People;
