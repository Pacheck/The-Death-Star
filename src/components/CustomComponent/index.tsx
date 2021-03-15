import { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useApi } from "../../hooks/useApi";
import { v4 as uuidv4 } from "uuid";

import Container from "./styles";
import Logo from "../../assets/logo/star-wars-2.svg";
import CustomCard from "../CustomCard";
import { APIResponse, Response } from "./types";

const useStyles = makeStyles((theme) =>
  createStyles({
    pagination: {
      marginTop: 20,
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
    },
  })
);

const CustomComponent = () => {
  const [path, setPath] = useState(window.location.pathname);
  const [data, setData] = useState<APIResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();
  const fetchData = useApi();

  const fetchPlanetData = async () => {
    setIsLoading(true);
    const response: Response = await fetchData(
      `http://swapi.dev/api${!path ? "/species" : path}?page=${currentPage}`
    );
    console.log(response);
    setData(response.results);
    setIsLoading(false);
    setTotalPages(Math.ceil(response.count / 10));
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    fetchPlanetData();
    console.log({ isLoading });
  }, [currentPage]);

  return (
    <>
      {!!data && (
        <Container
          className={classes.pagination}
          onChange={handleChangePage}
          count={totalPages}
          variant="outlined"
          shape="rounded"
        >
          {data.map((data) => {
            return (
              <CustomCard
                key={uuidv4()}
                data={data}
                imageLogo={Logo}
                isLoading={isLoading}
              />
            );
          })}
        </Container>
      )}
    </>
  );
};

export default CustomComponent;
