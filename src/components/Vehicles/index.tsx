import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";

import { Container } from "./styles";
import CustomCard from "../CustomCard";
import imageLogo from "../../assets/ships/ship2.png";
import { Vehicle } from "./types";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const fetchData = useApi();

  const fetchVehiclesData = async () => {
    const response = await fetchData("http://swapi.dev/api/vehicles/");
    setVehicles(response.results);
    console.log(response);
  };

  useEffect(() => {
    fetchVehiclesData();
  }, []);
  //name, model, vehicle_class ,cost

  return (
    <Container>
      {vehicles.map((vehicle) => (
        <CustomCard
          key={vehicle.name}
          text1={vehicle.name}
          text2={vehicle.model}
          text3={vehicle.vehicle_class}
          text4={vehicle.cost_in_credits}
          imageLogo={imageLogo}
        />
      ))}
    </Container>
  );
};

export default Vehicles;
