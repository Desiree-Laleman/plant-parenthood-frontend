import { useCallback, useContext, useEffect, useState } from "react";
import "./Home.css";
import PlantList from "./PlantList";
import SearchPlantForm from "./SearchPlantForm";
import SearchResultDetails from "./SearchResultDetails";
import SearchResultsList from "./SearchResultsList";
import Plant from "../models/Plant";
import { getPlantByID, getPlantsBySearch } from "../services/perenualService";
import PerenualPlant from "../models/PerenualPlant";
import {
  addPlant,
  deletePlant,
  editPlant,
  getUserPlants,
} from "../services/userServices";
import AuthContext from "../context/AuthContext";
import EditPlantForm from "./EditPlantForm";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [searchResults, setSearchResults] = useState<PerenualPlant[]>([]);
  const [showNumber, setShowNumber] = useState(0);
  const [nickName, setNickName] = useState("");
  const [searchedPlant, setSearchedPlant] = useState<PerenualPlant | null>(
    null
  );

  const searchPlants = async (query: string): Promise<void> => {
    setSearchResults((await getPlantsBySearch(query)).data);
  };

  const searchedPlantById = async (id: number): Promise<void> => {
    setSearchedPlant(await getPlantByID(id));
  };

  const loadUserPlants = useCallback(async (): Promise<void> => {
    if (user) {
      setPlants(await getUserPlants(user.uid));
    }
  }, [user]);

  const addPlantHandler = async (plant: Plant): Promise<void> => {
    await addPlant(plant);
    loadUserPlants();
  };

  const editPlantHandler = async (nickName: string): Promise<void> => {
    let TPlant = plants.find((item) => item.nickName === nickName);
    if (TPlant) {
      TPlant = { ...TPlant, nickName };
      await editPlant(TPlant);
      loadUserPlants();
    }
  };

  const deletePlantHandler = async (
    googleId: string,
    _id: string
  ): Promise<void> => {
    await deletePlant(googleId, _id);
    loadUserPlants();
  };

  useEffect(() => {
    (async () => {
      loadUserPlants();
    })();
  }, [user, loadUserPlants]);

  return (
    <div className="Home">
      <button id="add-plant" onClick={() => setShowNumber(1)}>
        Add Plant
      </button>
      {showNumber === 1 && (
        <SearchPlantForm
          setShowNumber={setShowNumber}
          searchPlants={searchPlants}
        />
      )}
      {showNumber === 2 && (
        <SearchResultsList
          setShowNumber={setShowNumber}
          searchResults={searchResults}
          searchedPlantById={searchedPlantById}
        />
      )}
      {showNumber === 3 && searchedPlant && (
        <SearchResultDetails
          setShowNumber={setShowNumber}
          searchedPlant={searchedPlant}
          addPlantHandler={addPlantHandler}
        />
      )}
      {showNumber === 4 && (
        <EditPlantForm
          setShowNumber={setShowNumber}
          editPlantHandler={editPlantHandler}
          nickName={nickName}
        />
      )}
      {plants.length ? (
        <PlantList
          plants={plants}
          deletePlantHandler={deletePlantHandler}
          setShowNumber={setShowNumber}
          setNickName={setNickName}
        />
      ) : (
        <p>Add a plant</p>
      )}
    </div>
  );
};

export default Home;
