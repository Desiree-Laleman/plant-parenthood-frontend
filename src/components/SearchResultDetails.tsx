import AddPlantForm from "./AddPlantForm";
import "./SearchResultDetails.css";

interface Props {
  setShowNumber: (number: number) => void;
}

const SearchResultDetails = ({ setShowNumber }: Props) => {
  return (
    <div className="SearchResultDetails">
      <div>Show Details About Plant</div>
      <AddPlantForm />
    </div>
  );
};

export default SearchResultDetails;
