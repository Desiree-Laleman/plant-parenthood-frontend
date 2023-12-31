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
  return (
    <div className="SearchResultDetails pop-up-container">
      <div className="pop-up">
        <section>
          <h2>{searchedPlant.common_name}</h2>
        </section>
        <div id="plant-details-containers">
          <ul>
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
            alt={searchedPlant.common_name}
          />
        </div>
        <AddPlantForm
          setShowNumber={setShowNumber}
          addPlantHandler={addPlantHandler}
          searchedPlant={searchedPlant}
        />
      </div>
    </div>
  );
};

export default SearchResultDetails;
