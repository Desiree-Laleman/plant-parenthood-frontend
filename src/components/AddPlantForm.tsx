import { FormEvent } from "react";
import "./AddPlantForm.css";

const AddPlantForm = () => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div className="AddPlantForm">
      <button>Cancel</button>
    </div>
  );
};

export default AddPlantForm;
