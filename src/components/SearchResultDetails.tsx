import "./SearchResultDetails.css";
import AddPlantForm from "./AddPlantForm";
import PerenualPlant from "../models/PerenualPlant";
import Plant from "../models/Plant";
import plantDefaultImage from "../assets/plant-default-image.png";

interface Props {
  setShowNumber: (number: number) => void;
  addPlantHandler: (plant: Plant) => void;
  searchedPlant: PerenualPlant;
}

const SearchResultDetails = ({
  setShowNumber,
  addPlantHandler,
  searchedPlant,
}: Props) => {
  console.log(searchedPlant.watering);
  return (
    <div className="SearchResultDetails">
      <h2>ADD PLANT FORM</h2>
      <div id="plant-details-containers">
        <ul>
          <li>Common Name: {searchedPlant.common_name}</li>
          <li>Scientific Name: {searchedPlant.scientific_name}</li>
          <li>Cycle: {searchedPlant.cycle}</li>
          <li>
            Watering:{" "}
            {searchedPlant.watering === "Frequent"
              ? "Every 7 Days"
              : searchedPlant.watering === "Average"
              ? "Every 14 Days"
              : searchedPlant.watering === "Minimum"
              ? "Every 21 days"
              : "Every 28 days"}
          </li>
          <li>Sunlight: {searchedPlant.sunlight}</li>
        </ul>
        <img
          src={
            searchedPlant.default_image?.thumbnail
              ? searchedPlant.default_image?.thumbnail
              : plantDefaultImage
          }
          alt="plant image"
        />
      </div>
      <AddPlantForm
        setShowNumber={setShowNumber}
        addPlantHandler={addPlantHandler}
        searchedPlant={searchedPlant}
      />
    </div>
  );
};

export default SearchResultDetails;
