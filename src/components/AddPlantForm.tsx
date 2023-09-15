import { FormEvent } from "react";
import "./AddPlantForm.css";

interface Props {
  setShowNumber: (number: number) => void;
}

const AddPlantForm = ({ setShowNumber }: Props) => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setShowNumber(0);
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
      <button onClick={() => setShowNumber(2)}>Cancel</button>
    </div>
  );
};

export default AddPlantForm;
