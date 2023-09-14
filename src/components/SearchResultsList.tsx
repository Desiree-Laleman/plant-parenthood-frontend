import { useState } from "react";
import SearchResultsCard from "./SearchResultsCard";
import "./SearchResultsList.css";
import PerenualPlant from "../models/PerenualPlant";
import Plant from "../models/Plant";

interface Props {
  setShowNumber: (number: number) => void;
  searchResults: PerenualPlant[];
  setChosenPlant: (plant: Plant) => void;
}

const SearchResultsList = ({
  setShowNumber,
  searchResults,
  setChosenPlant,
}: Props) => {
  return (
    <ul className="SearchResultsList">
      {searchResults.map((item) => (
        <SearchResultsCard
          item={item}
          setShowNumber={setShowNumber}
          setChosenPlant={setChosenPlant}
        />
      ))}
    </ul>
  );
};

export default SearchResultsList;
