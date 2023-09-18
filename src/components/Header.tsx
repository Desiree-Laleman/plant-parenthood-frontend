import "./Header.css";
import { signOut } from "../firebaseConfig";
import clover from "../assets/three-leaf-clover.png";

interface Props {
  setShowLandingPage: (boolean: boolean) => void;
}

const Header = ({ setShowLandingPage }: Props) => {
  const landingPageReturn = () => {
    signOut();
    setShowLandingPage(true);
  };
  return (
    <div className="Header">
      <img src={clover} alt="three leaf clover logo" />
      <div>
        <button onClick={landingPageReturn}>Sign out</button>
      </div>
    </div>
  );
};

export default Header;
