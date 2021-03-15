import { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useLocation, useParams } from "react-router-dom";
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
  const [data, setData] = useState<APIResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useApi();
  const params = useParams();
  const { pathname } = useLocation();

  const classes = useStyles();

  const handleFetchDataFromAPI = async () => {
    setIsLoading(true);
    const response: Response = await fetchData(
      `${pathname}?page=${currentPage}`
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
    handleFetchDataFromAPI();
    console.log({ isLoading });
    console.log({ params });
    console.log({ pathname });
  }, [currentPage, pathname]);
  ///////// Coloquei o pathname no array de dep, ficar atento

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
