import { FormEvent, useState } from "react";
import "./SearchPlantForm.css";

interface Props {
  setShowNumber: (number: number) => void;
  searchPlants: (query: string) => void;
}

const SearchPlantForm = ({ setShowNumber, searchPlants }: Props) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    searchPlants(query);
    setShowNumber(2);
  };

  return (
    <div className="SearchPlantForm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Plant Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      <button id="search-form-back" onClick={() => setShowNumber(0)}>
        Back
      </button>
    </div>
  );
};

export default SearchPlantForm;
