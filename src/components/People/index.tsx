import { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import { useApi } from "../../hooks/useApi";
import starWarsLogo from "../../assets/logo/star-wars.svg";
import { Person } from "./types";
import CustomCard from "../CustomCard";
import { Container } from "./styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    pagination: {
      marginTop: 20,
    },
  })
);

interface Response {
  count: number;
  next: string;
  previous: string;
  results: Person[];
}

const People = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const fetchData = useApi();
  const classes = useStyles();

  const fetchPeopleData = async () => {
    const response: Response = await fetchData(
      `http://swapi.dev/api/people/?page=${currentPage}`
    );
    setTotalPages(Math.ceil(response.count / 10));
    setPeople(response.results);
    console.log(response);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    fetchPeopleData();
  }, [currentPage]);

  return (
    <Container>
      {people.map((person) => (
        <CustomCard
          key={person.name}
          text1={person.name}
          text2={person.mass}
          text3={person.height}
          text4={person.birth_year}
          imageLogo={starWarsLogo}
        />
      ))}
      <Pagination
        className={classes.pagination}
        onChange={handleChangePage}
        count={totalPages}
        variant="outlined"
        shape="rounded"
      />
    </Container>
  );
};

export default People;
