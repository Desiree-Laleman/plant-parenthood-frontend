import "./Header.css";
import { signOut } from "../firebaseConfig";
import clover from "../assets/three-leaf-clover.png";
import logo from "../assets/plant-parenthood-logo.png";

const Header = () => {
  return (
    <header className="Header">
      <img src={clover} id="clover-logo" alt="three leaf clover logo" />
      <h1>
        <img src={logo} id="plant-parenthood" alt="Plant Parenthood" />
      </h1>
      <div>
        <button onClick={signOut}>Sign out</button>
      </div>
    </header>
  );
};

export default Header;
