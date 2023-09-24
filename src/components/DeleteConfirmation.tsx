import "./DeleteConfirmation.css";

interface Props {
  confirmDelete: () => void;
  cancelDelete: () => void;
}

const DeleteConfirmation = ({ confirmDelete, cancelDelete }: Props) => {
  return (
    <div className="DeleteConfirmation pop-up-container">
      <div className="pop-up">
        {" "}
        <p>Are you sure you want to delete this plant?</p>
        <div id="delete-button-container">
          <button onClick={confirmDelete}>Delete</button>
          <button onClick={cancelDelete}>Keep plant</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
