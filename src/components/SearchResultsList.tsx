import { useState } from "react";
import SearchResultsCard from "./SearchResultsCard";
import "./SearchResultsList.css";

interface Props {
  setShowNumber: (number: number) => void;
}

const SearchResultsList = ({ setShowNumber }: Props) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <ul className="SearchResultsList">
      {searchResults.map((item) => (
        <SearchResultsCard item={item} setShowNumber={setShowNumber} />
      ))}
    </ul>
  );
};

export default SearchResultsList;
