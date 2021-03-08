import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

import { Container } from "./styles";
import { Vehicle } from "./types";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const fetchData = useApi();

  const fetchVehiclesData = async () => {
    const response = await fetchData("http://swapi.dev/api/vehicles/");
    setVehicles(response.results);
  };

  useEffect(() => {
    fetchVehiclesData();
  }, []);

  return (
    <Container>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.name}>{vehicle.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Vehicles;
