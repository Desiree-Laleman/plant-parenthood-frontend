import AddPlantForm from "./AddPlantForm";
import "./SearchResultDetails.css";

interface Props {
  setShowNumber: (number: number) => void;
}

const SearchResultDetails = ({ setShowNumber }: Props) => {
  return (
    <div className="SearchResultDetails">
      <section>
        <h2>Plant Details</h2>
        <p>PLANT INFO GOES HERE</p>
      </section>
      <img src="" alt="sample plant image" />
      <AddPlantForm />
    </div>
  );
};

export default SearchResultDetails;
