import { FormEvent, useState } from "react";
import "./PlantForm.css";

const PlantForm = () => {
  const [nickname, setNickname] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setNickname("");
    setSearch("");
  };
  return (
    <form className="PlantForm" onSubmit={(e) => handleSubmit(e)}>
      <input
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
      />
      <button>Add Plant</button>
    </form>
  );
};

export default PlantForm;
