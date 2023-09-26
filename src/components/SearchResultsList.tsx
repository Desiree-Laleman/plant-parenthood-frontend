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
    <div className="SearchResultsList">
      {searchResults.length ? (
        <button id="search-list-cancel" onClick={() => setShowNumber(1)}>
          x
        </button>
      ) : (
        <p>Search not found</p>
      )}

      <ul>
        {searchResults.map((item) => (
          <li className="list-item" key={item.id}>
            <SearchResultsCard
              perenualPlant={item}
              setShowNumber={setShowNumber}
              searchedPlantById={searchedPlantById}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultsList;
