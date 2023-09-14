import { FormEvent } from "react";
import AddPlantForm from "./AddPlantForm";
import "./SearchResultDetails.css";

interface Props {
  setShowNumber: (number: number) => void;
}

const SearchResultDetails = ({ setShowNumber }: Props) => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };
  return (
    <div className="SearchResultDetails">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="nickname"
          id="nickname"
          placeholder="Plant Nickname"
        />
        <button>ADD PLANT</button>
      </form>
    </div>
  );
};

export default SearchResultDetails;
