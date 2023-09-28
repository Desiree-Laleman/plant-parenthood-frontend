import SearchResultsCard from "./SearchResultsCard";
import "./SearchResultsList.css";
import PerenualPlant from "../models/PerenualPlant";
import clover_loading from "../assets/Clover_Loading.gif";

interface Props {
  setShowNumber: (number: number) => void;
  searchResults: PerenualPlant[] | null;
  searchedPlantById: (id: number) => void;
}

const SearchResultsList = ({
  setShowNumber,
  searchResults,
  searchedPlantById,
}: Props) => {
  return (
    <div className="SearchResultsList">
      {searchResults === null ? (
        <img
          id="clover-loading"
          src={clover_loading}
          alt="clover loading gif"
        />
      ) : searchResults.length ? (
        <button id="search-list-cancel" onClick={() => setShowNumber(1)}>
          x
        </button>
      ) : (
        <p id="search-not-found">Search not found</p>
      )}

      <ul>
        {searchResults?.map((item) => (
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
