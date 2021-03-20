import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { APIResponse } from "../../components/CustomComponent/types";
import { useApi } from "../../hooks/useApi";
import { v4 as uuidv4 } from "uuid";

import { Container } from "./styles";
import { DynamicObject } from "./types";
import { handleViewData } from "../../helpers/filterCustomData";
import imageLogo from "../../assets/logo/star-wars-2.svg";

const Details = () => {
  const [data, setData] = useState<DynamicObject<APIResponse>>({});
  const history = useHistory();
  const { pathname } = useLocation();
  const fetchData = useApi();

  const handleFetchDataFromAPI = async (childrenURLs?: string) => {
    if (childrenURLs) {
      const response: DynamicObject<APIResponse> = await fetchData(
        childrenURLs
      );

      // const data = handleViewData({ data: response, imageLogo });
      console.log(response.title);

      return response;
    } else {
      const urlToFetch = pathname.replace("/details/", "");
      const response: DynamicObject<APIResponse> = await fetchData(urlToFetch);
      setData(response);
      // console.log(response);
    }
  };

  const handleCheckIsURL = (data: APIResponse) => {
    return (
      data.toString().includes("http://swapi.dev/api") || Array.isArray(data)
    );
  };

  const handleIterateMapKeys = (key: string) => {
    if (handleCheckIsURL(data[key])) {
      console.log("sim");
    }

    return (
      <h3 key={uuidv4()}>
        {key}: {data[key]}
      </h3>
    );
  };

  useEffect(() => {
    handleFetchDataFromAPI();
  }, [pathname]);

  return (
    <>
      {!!data && (
        <Container>{Object.keys(data).map(handleIterateMapKeys)}</Container>
      )}
    </>
  );
};

export default Details;
