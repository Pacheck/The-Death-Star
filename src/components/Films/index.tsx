import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

import { Container } from "./styles";
import { Film } from "./types";

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const api = useApi();

  const fetchFilmData = async () => {
    const response = await api("http://swapi.dev/api/films/");
    setFilms(response.results);
  };

  useEffect(() => {
    fetchFilmData();
  }, []);

  console.log(films);

  return (
    <Container>
      <ul>
        {films.map((film) => (
          <li key={film.title}>{film.title}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Films;
