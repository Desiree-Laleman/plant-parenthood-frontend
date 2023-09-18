import "./LandingPage.css";
import { signInWithGoogle } from "../firebaseConfig";
import clover from "../assets/three-leaf-clover.png";
import wateringGif from "../assets/anime-watering-gif.webp";

interface Props {
  setShowLandingPage: (boolean: boolean) => void;
}

const LandingPage = ({ setShowLandingPage }: Props) => {
  const landingPageCollapse = () => {
    signInWithGoogle();
    setShowLandingPage(false);
  };
  return (
    <div
      className="LandingPage"
      style={{ backgroundImage: `url(${wateringGif})` }}
    >
      <h1>Plant Parenthood</h1>
      <img src={clover} alt="clover" />
      <img src={wateringGif} alt="clover" />
      <button onClick={landingPageCollapse}>Sign in with Google</button>
    </div>
  );
};

export default LandingPage;
