import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { APIResponse } from "../../components/CustomComponent/types";
import { useApi } from "../../hooks/useApi";
import { v4 as uuidv4 } from "uuid";

import { Container } from "./styles";
import { DynamicObject } from "./types";

const Details = () => {
  const [data, setData] = useState<DynamicObject<APIResponse>>({});
  const { pathname } = useLocation();
  const fetchData = useApi();

  const handleFetchDataFromAPI = async () => {
    const urlToFetch = pathname.replace("/details/", "");
    const response: DynamicObject<APIResponse> = await fetchData(urlToFetch);
    setData(response);
  };

  useEffect(() => {
    handleFetchDataFromAPI();
  }, []);

  return (
    <>
      {!!data && (
        <Container>
          {Object.keys(data).map((key) => {
            return (
              <h3 key={uuidv4()}>
                {key}: {data[key]}
              </h3>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default Details;
