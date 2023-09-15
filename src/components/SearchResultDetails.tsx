import "./SearchResultDetails.css";
import AddPlantForm from "./AddPlantForm";
import PerenualPlant from "../models/PerenualPlant";
import { useEffect, useState } from "react";
import { getPlantByID } from "../services/perenualService";
import Plant from "../models/Plant";

interface Props {
  item: Plant | null;
  setShowNumber: (number: number) => void;
}

const SearchResultDetails = ({ setShowNumber, item }: Props) => {
  const [searchedPlant, setSearchedPlant] = useState<PerenualPlant>();

  const searchedPlantById = async (id: number): Promise<void> => {
    setSearchedPlant(await getPlantByID(id));
  };

  useEffect(() => {
    (async () => {
      await searchedPlantById(item!.perenualId);
    })();
  }, [item]);

  return (
    <div className="SearchResultDetails">
      <h2>ADD PLANT FORM</h2>
      {searchedPlant ? (
        <div id="plant-details-containers">
          <ul>
            <li>Common Name: {searchedPlant.common_name}</li>
            <li>Scientific Name: {searchedPlant.scientific_name}</li>
            <li>Cycle: {searchedPlant.cycle}</li>
            <li>Watering: {searchedPlant.watering}</li>
            <li>Sunlight: {searchedPlant.sunlight}</li>
          </ul>
          <img src={searchedPlant.default_image?.thumbnail} alt="plant image" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <AddPlantForm setShowNumber={setShowNumber} />
    </div>
  );
};

export default SearchResultDetails;
