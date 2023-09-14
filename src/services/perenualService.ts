import axios from "axios";
import PerenualResponse from "../models/PerenualResponse";

const baseURL: string = "https://perenual.com/api";
const key: string = process.env.REACT_APP_API_KEY || "";

export const getPlantsBySearch = async (
  searchTerm: string
): Promise<PerenualResponse> => {
  return (
    await axios.get(`${baseURL}/species-list`, {
      params: { key, q: searchTerm },
    })
  ).data;
};
