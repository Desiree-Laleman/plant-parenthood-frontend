import axios from "axios";
import Plant from "../models/Plant";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getUserPlants = async (googleId: string): Promise<Plant[]> => {
  return (
    await axios.get(`${baseURL}/users/${encodeURIComponent(googleId)}/plants`)
  ).data;
};

export const getUserPlantById = async (
  googleId: string,
  _id: string
): Promise<Plant> => {
  return (
    await axios.get(
      `${baseURL}/users/${encodeURIComponent(
        googleId
      )}/plants/${encodeURIComponent(_id)}`
    )
  ).data;
};

export const addPlant = async (plant: Plant): Promise<Plant> => {
  console.log(plant);
  return (await axios.post(`${baseURL}/users/plants`, plant)).data;
};

export const editPlant = async (plant: Plant): Promise<Plant> => {
  return (
    await axios.put(
      `${baseURL}/users/${encodeURIComponent(
        plant.googleId
      )}/plants/${encodeURIComponent(plant._id!)}`,
      plant
    )
  ).data;
};

export const deletePlant = async (
  googleId: string,
  _id: string
): Promise<void> => {
  await axios.delete(
    `${baseURL}/users/${encodeURIComponent(
      googleId
    )}/plants/${encodeURIComponent(_id)}`
  );
};
