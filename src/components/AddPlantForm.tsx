import { FormEvent, useContext, useState } from "react";
import "./AddPlantForm.css";
import Plant from "../models/Plant";
import PerenualPlant from "../models/PerenualPlant";
import AuthContext from "../context/AuthContext";
import plantDefaultImage from "../assets/plant-default-image.png";

interface Props {
  setShowNumber: (number: number) => void;
  addPlantHandler: (plant: Plant) => void;
  searchedPlant: PerenualPlant;
}

const AddPlantForm = ({
  setShowNumber,
  addPlantHandler,
  searchedPlant,
}: Props) => {
  const { user } = useContext(AuthContext);
  const [nickName, setNickName] = useState("");
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const wateringFrequency =
      searchedPlant.watering === "Frequent"
        ? 7
        : searchedPlant.watering === "Average"
        ? 14
        : searchedPlant.watering === "Minimum"
        ? 21
        : 28;

    const plantCardPicture = searchedPlant.default_image?.thumbnail
      ? searchedPlant.default_image?.thumbnail
      : plantDefaultImage;

    const plant: Plant = {
      perenualId: searchedPlant.id,
      googleId: user?.uid!,
      nickName,
      commonName: searchedPlant.common_name,
      scientificName: searchedPlant.scientific_name,
      otherName: searchedPlant.other_name,
      watering: wateringFrequency,
      waterDate: new Date(),
      pic: plantCardPicture,
    };
    addPlantHandler(plant);
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
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <button>Add Plant</button>
      </form>
      <button onClick={() => setShowNumber(2)}>Cancel</button>
    </div>
  );
};

export default AddPlantForm;
