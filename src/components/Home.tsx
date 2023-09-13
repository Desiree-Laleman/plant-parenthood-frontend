import "./Home.css";
import PlantForm from "./PlantForm";
import PlantList from "./PlantList";

const Home = () => {
  return (
    <div className="Home">
      <PlantForm />
      <PlantList />
    </div>
  );
};

export default Home;
