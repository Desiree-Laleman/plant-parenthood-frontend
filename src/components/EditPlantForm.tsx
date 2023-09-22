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
  const [updateWateringFrequency, setUpdateWateringFrequency] = useState(
    plant.watering || ""
  );

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
    update.watering = Number(updateWateringFrequency);
    await editPlantHandler(update);
    setEditIndex(null);
  };
  console.log(plant.watering);
  return (
    <div className="EditPlantForm pop-up-container">
      <div className="pop-up">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div id="edit-plant-image-container">
              <img src={plant.pic} alt={plant.commonName} />
            </div>
            <label htmlFor="upload">Picture Upload</label>
            <input ref={fileInputRef} type="file" name="upload" id="upload" />
          </div>
          <div>
            <label htmlFor="updateNickName">Update Nickname: </label>
            <input
              type="text"
              name="updatedNickName"
              id="updatedNickName"
              value={updatedNickName}
              onChange={(e) => setUpdatedNickName(e.target.value)}
            />
            <label htmlFor="wateringFrequency">
              Update Watering Frequency (days):{" "}
            </label>
            <input
              type="number"
              name="wateringFrequency"
              id="wateringFrequency"
              value={updateWateringFrequency}
              onChange={(e) => setUpdateWateringFrequency(e.target.value)}
            />
          </div>
          <div id="edit-plant-button-container">
            <button>EDIT PLANT</button>
          </div>
        </form>
        <button id="cancel" onClick={() => setEditIndex(null)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditPlantForm;
