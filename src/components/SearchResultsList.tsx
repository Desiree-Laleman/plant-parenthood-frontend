import SearchResultsCard from "./SearchResultsCard";
import "./SearchResultsList.css";
import PerenualPlant from "../models/PerenualPlant";

interface Props {
  setShowNumber: (number: number) => void;
  searchResults: PerenualPlant[];

  searchedPlantById: (id: number) => void;
}

const SearchResultsList = ({
  setShowNumber,
  searchResults,
  searchedPlantById,
}: Props) => {
  return (
    <>
      <button id="search-list-cancel" onClick={() => setShowNumber(0)}>
        x
      </button>
      <ul className="SearchResultsList">
        {searchResults.map((item) => (
          <SearchResultsCard
            perenualPlant={item}
            setShowNumber={setShowNumber}
            searchedPlantById={searchedPlantById}
          />
        ))}
      </ul>
    </>
  );
};

export default SearchResultsList;
