import { DataHelperType } from "../components/CustomCard/types";

export const handleViewData = ({ data, imageLogo }: DataHelperType) => {

    const DataToBeReturned = 
        {
            text1: data.name || data.title || "unknown",
            text2:
              data.director ||
              data.mass ||
              data.population ||
              data.classification ||
              data.crew ||
              data.model ||
              "unknown",
            text3:
              data.release_date ||
              data.height ||
              data.climate ||
              data.language ||
              data.max_atmosphering_speed ||
              data.vehicle_class ||
              "unknown",
            text4:
              data.opening_crawl ||
              data.birth_year ||
              data.terrain ||
              data.skin_colors ||
              data.cost_in_credits ||
              "unknown",
            imageLogo: imageLogo,            
          }

    return DataToBeReturned;
};