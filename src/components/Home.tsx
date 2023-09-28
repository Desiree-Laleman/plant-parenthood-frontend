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
import ClickedPlantDetails from "./ClickedPlantDetails";
import DeleteConfirmation from "./DeleteConfirmation";
import PhotoSearchForm from "./PhotoSearchForm";
import homeBackground from "../assets/home-background.jpg";
const Home = () => {
  const { user } = useContext(AuthContext);
  const [showNumber, setShowNumber] = useState(0);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [searchResults, setSearchResults] = useState<PerenualPlant[] | null>(
    null
  );
  const [searchedPlant, setSearchedPlant] = useState<PerenualPlant | null>(
    null
  );
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [plantToDelete, setPlantToDelete] = useState<Plant | null>(null);

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

  const editPlantHandler = async (plant: Plant): Promise<void> => {
    await editPlant(plant);
    loadUserPlants();
  };

  // const deletePlantHandler = async (
  //   googleId: string,
  //   _id: string
  // ): Promise<void> => {
  //   await deletePlant(googleId, _id);
  //   loadUserPlants();
  // };

  const showDeleteConfirmationPopup = (plant: Plant) => {
    setPlantToDelete(plant);
    setShowDeleteConfirmation(true);
  };

  const hideDeleteConfirmationPopup = () => {
    setPlantToDelete(null);
    setShowDeleteConfirmation(false);
  };

  const deletePlantHandler = async (
    googleId: string,
    _id: string
  ): Promise<void> => {
    const plantToDelete = plants.find((plant) => plant._id === _id);
    if (plantToDelete) {
      showDeleteConfirmationPopup(plantToDelete);
    }
  };

  const confirmDeletePlant = async () => {
    if (plantToDelete) {
      await deletePlant(plantToDelete.googleId, plantToDelete._id!);
      loadUserPlants();
      hideDeleteConfirmationPopup();
    }
  };

  useEffect(() => {
    (async () => {
      loadUserPlants();
    })();
  }, [user, loadUserPlants]);
  return (
    <main className="Home">
      <img src={homeBackground} alt="background" id="background-image" />
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
      {showNumber === 4 && searchedPlant && (
        <ClickedPlantDetails
          setShowNumber={setShowNumber}
          plant={searchedPlant}
        />
      )}
      {showNumber === 5 && (
        <PhotoSearchForm
          setShowNumber={setShowNumber}
          searchPlants={searchPlants}
        />
      )}
      {showNumber != 2 && plants.length ? (
        <PlantList
          plants={plants}
          deletePlantHandler={deletePlantHandler}
          setShowNumber={setShowNumber}
          setEditIndex={setEditIndex}
          editPlantHandler={editPlantHandler}
          searchedPlantById={searchedPlantById}
        />
      ) : (
        ""
      )}
      {editIndex != null && (
        <EditPlantForm
          setEditIndex={setEditIndex}
          editPlantHandler={editPlantHandler}
          plant={plants[editIndex]}
        />
      )}
      {showDeleteConfirmation && (
        <DeleteConfirmation
          confirmDelete={confirmDeletePlant}
          cancelDelete={hideDeleteConfirmationPopup}
        />
      )}
    </main>
  );
};

export default Home;
