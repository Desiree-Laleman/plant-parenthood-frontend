import axios from "axios";

const baseURL: string = "https://plant.id/api/v3/identification";
const key: string = process.env.REACT_APP_PLANT_AI_KEY || "";

export const decipherImage = async (base64Image: string): Promise<any> => {
  return (
    await axios.post(
      baseURL,
      {
        images: [`${base64Image}`],
        latitude: 49.207,
        longitude: 16.608,
        similar_images: true,
      },
      {
        headers: {
          "Api-Key": key,
          "Content-Type": "application/json",
        },
      }
    )
  ).data;
};
