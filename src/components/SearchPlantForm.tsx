import { FormEvent, useState } from "react";
import "./SearchPlantForm.css";

interface Props {
  setShowNumber: (number: number) => void;
}

const SearchPlantForm = ({ setShowNumber }: Props) => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setShowNumber(2);
  };
  return (
    <div className="SearchPlantForm">
      <button onClick={() => setShowNumber(0)}>Go Back</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* <input
        type="text"
        name="nickname"
        id="nickname"
        placeholder="Plant Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Plant Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /> */}
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchPlantForm;
