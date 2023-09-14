import { FormEvent } from "react";
import "./AddPlantForm.css";

const AddPlantForm = () => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div className="AddPlantForm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="nickname"
          id="nickname"
          placeholder="Plant Nickname"
        />
        <button>ADD PLANT</button>
      </form>
      <button>Cancel</button>
    </div>
  );
};

export default AddPlantForm;
