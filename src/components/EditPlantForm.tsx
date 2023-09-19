import "./EditPlantForm.css";
import Plant from "../models/Plant";
import "./ClickedPlantDetails.css";
import { FormEvent, useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebaseConfig";

interface Props {
  setEditIndex: (number: number | null) => void;
  editPlantHandler: (plant: Plant) => void;
  plant: Plant;
}

const EditPlantForm = ({ setEditIndex, editPlantHandler, plant }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [updatedNickName, setUpdatedNickName] = useState(plant.nickName || "");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const files = fileInputRef.current?.files;
    const update: Plant = { ...plant };
    if (files && files[0]) {
      const file = files[0]; // Here is the file we need
      const storageRef = ref(storage, "plantImages/" + file.name);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      update.pic = url;
    }

    update.nickName = updatedNickName;
    await editPlantHandler(update);
    setEditIndex(null);
  };
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
