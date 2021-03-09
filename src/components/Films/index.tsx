import { useState, useEffect } from "react";

import { useApi } from "../../hooks/useApi";

import { Film } from "./types";
import starWarsLogo from "../../assets/logo/star-wars-2.svg";

import CustomCard from "../CustomCard";
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
        <CustomCard
          key={film.title}
          text1={film.title}
          text2={film.director}
          text3={film.release_date}
          text4={film.opening_crawl}
          imageLogo={starWarsLogo}
        />
      ))}
    </Container>
  );
};

export default Films;
