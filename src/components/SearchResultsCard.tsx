import PerenualPlant from "../models/PerenualPlant";
import "./SearchResultsCard.css";

interface Props {
  perenualPlant: PerenualPlant;
  setShowNumber: (number: number) => void;
  searchedPlantById: (id: number) => void;
}

const SearchResultsCard = ({
  perenualPlant,
  setShowNumber,
  searchedPlantById,
}: Props) => {
  const handleClick = (e: any) => {
    searchedPlantById(perenualPlant.id);
    setShowNumber(3);
  };
  return (
    <li className="SearchResultsCard" onClick={handleClick}>
      <div>
        <p>Common Name: {perenualPlant.common_name}</p>
        <p>Scientific Name: {perenualPlant.scientific_name}</p>
        <p>Other Name: {perenualPlant.other_name}</p>
      </div>
      <img src={perenualPlant.default_image?.thumbnail} alt="plant image" />
    </li>
  );
};

export default SearchResultsCard;
