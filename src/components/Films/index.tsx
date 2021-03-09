import { useState, useEffect } from "react";

import { useApi } from "../../hooks/useApi";

import { Film } from "./types";
import FilmCard from "../FilmCard";
import { Container } from "./styles";

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const fetchData = useApi();

  const fetchFilmData = async () => {
    const response = await fetchData("http://swapi.dev/api/films/");
    setFilms(response.results);
    console.log(response.results);
  };

  useEffect(() => {
    fetchFilmData();
  }, []);

  return (
    <Container>
      {films.map((film) => (
        <FilmCard
          key={film.title}
          title={film.title}
          director={film.director}
          release_date={film.release_date}
          opening_crawl={film.opening_crawl}
        />
      ))}
    </Container>
  );
};

export default Films;
