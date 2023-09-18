import "./EditPlantForm.css";
import Plant from "../models/Plant";
import "./ClickedPlantDetails.css";
import { FormEvent, useRef, useState } from "react";

interface Props {
  setShowNumber: (number: number) => void;
  editPlantHandler: (nickName: string) => void;
  nickName: string;
}

const EditPlantForm = ({
  setShowNumber,
  editPlantHandler,
  nickName,
}: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [updatedNickName, setUpdatedNickName] = useState(nickName || "");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await editPlantHandler(updatedNickName);
    setShowNumber(0);
  };
  return (
    <>
      <form className="EditPlantForm" onSubmit={(e) => handleSubmit(e)}>
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
      <button onClick={() => setShowNumber(0)}>Cancel</button>
    </>
  );
};

export default EditPlantForm;
