import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Container } from "./styles";
import { Person } from "./types";

const People = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const fetchData = useApi();

  const fetchPeopleData = async () => {
    const response = await fetchData("http://swapi.dev/api/people/");
    setPeople(response.results);
  };

  useEffect(() => {
    fetchPeopleData();
  }, []);

  return (
    <Container>
      <ul>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default People;
