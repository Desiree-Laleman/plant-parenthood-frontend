import SearchResultsCard from "./SearchResultsCard";
import "./SearchResultsList.css";

interface Props {
  setShowNumber: (number: number) => void;
}

const SearchResultsList = ({ setShowNumber }: Props) => {
  return (
    <div className="SearchResultsList">
      <SearchResultsCard />
    </div>
  );
};

export default SearchResultsList;
