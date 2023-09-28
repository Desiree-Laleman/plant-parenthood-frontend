import { FormEvent, useRef } from "react";
import "./PhotoSearchForm.css";
import { decipherImage } from "../services/plantAIService";

interface Props {
  setShowNumber: (number: number) => void;
  searchPlants: (query: string) => void;
}

const PhotoSearchForm = ({ setShowNumber, searchPlants }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const files = fileInputRef.current?.files;
    if (files && files[0]) {
      const file = files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64data: string = reader.result as string;
        const result = await decipherImage(base64data);
        searchPlants(result.result.classification.suggestions[0].name);
        setShowNumber(2);
      };
    }
  };
  return (
    <div className="PhotoSearchForm generic-form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="upload">Upload Photo</label>
        <input ref={fileInputRef} type="file" name="upload" id="upload" />
        <button>Submit Photo</button>
      </form>
      <button className="search-form-back" onClick={() => setShowNumber(1)}>
        Back
      </button>
    </div>
  );
};

export default PhotoSearchForm;
