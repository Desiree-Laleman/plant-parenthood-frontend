import { useContext } from "react";
import PerenualPlant from "../models/PerenualPlant";
import Plant from "../models/Plant";
import "./SearchResultsCard.css";
import AuthContext from "../context/AuthContext";

interface Props {
  item: PerenualPlant;
  setShowNumber: (number: number) => void;
  setChosenPlant: (plant: Plant) => void;
}

const SearchResultsCard = ({ item, setShowNumber, setChosenPlant }: Props) => {
  const { user } = useContext(AuthContext);
  const handleClick = (e: any) => {
    setShowNumber(3);
    const plant: Plant = {
      googleId: user?.uid!,
      nickName: "",
      commonName: item.common_name,
      scientificName: item.scientific_name[0],
      otherName: item.other_name[0],
      watering: 0,
      pic: item.default_image?.thumbnail,
    };
    setChosenPlant(plant);
  };
  return (
    <li className="SearchResultsCard" onClick={handleClick}>
      <div>
        <p>Common Name: {item.common_name}</p>
        <p>Scientific Name: {item.scientific_name}</p>
        <p>Other Name: {item.other_name}</p>
      </div>
      <img src={item.default_image?.thumbnail} alt="plant image" />
    </li>
  );
};

export default SearchResultsCard;
