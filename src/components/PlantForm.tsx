import "./PlantForm.css";

const PlantForm = () => {
  return (
    <form className="PlantForm">
      <label htmlFor="nickname">Plant Nickname:</label>
      <input type="text" name="nickname" id="nickname" />
    </form>
  );
};

export default PlantForm;
