import "./EditPlantForm.css";
import Plant from "../models/Plant";
import "./ClickedPlantDetails.css";
import { FormEvent, useRef, useState } from "react";

interface Props {
  setEditIndex: (number: number | null) => void;
  editPlantHandler: (nickName: string) => void;
  plant: Plant;
}

const EditPlantForm = ({ setEditIndex, editPlantHandler, plant }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [updatedNickName, setUpdatedNickName] = useState(plant.nickName || "");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await editPlantHandler(updatedNickName);
    setEditIndex(null);
  };
  console.log(plant);
  return (
    <>
      <form className="EditPlantForm" onSubmit={(e) => handleSubmit(e)}>
        <img src={plant.pic} alt={plant.commonName} />
        <label htmlFor="upload">Picture Upload</label>
        <input ref={fileInputRef} type="file" name="upload" id="upload" />
        <input
          type="text"
          name="updatedNickName"
          id="updatedNickName"
          value={updatedNickName}
          onChange={(e) => setUpdatedNickName(e.target.value)}
        />
        <button>EDIT PLANT</button>
      </form>
      <button onClick={() => setEditIndex(null)}>Cancel</button>
    </>
  );
};

export default EditPlantForm;
