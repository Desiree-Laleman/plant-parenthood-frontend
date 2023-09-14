import Plant from "../models/Plant";
import "./SearchResultsCard.css";

interface Props {
  item: Plant;
  setShowNumber: (number: number) => void;
}

const SearchResultsCard = ({ item, setShowNumber }: Props) => {
  return (
    <li className="SearchResultsCard">
      <button onClick={() => setShowNumber(3)}>
        <div>
          <p>Common Name: {item.commonName}</p>
          <p>Scientific Name: {item.scientificName}</p>
          <p>Other Name: {item.otherName}</p>
        </div>
        <img src={item.pic} alt="plant image" />
      </button>
    </li>
  );
};

export default SearchResultsCard;
