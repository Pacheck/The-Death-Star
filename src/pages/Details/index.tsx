import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

const Details = () => {
  const { pathname } = useLocation();
  const fetchData = useApi();

  const handleFetchDataFromAPI = async () => {
    const urlToFetch = pathname.replace("/details/", "");
    const response = await fetchData(urlToFetch);
    console.log(response);
  };

  useEffect(() => {
    handleFetchDataFromAPI();
  }, []);

  return <h2>details</h2>;
};

export default Details;
