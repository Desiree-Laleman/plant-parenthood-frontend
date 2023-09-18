import "./Header.css";
import { signOut } from "../firebaseConfig";
import clover from "../assets/three-leaf-clover.png";

const Header = () => {
  return (
    <div className="Header">
      <img src={clover} alt="three leaf clover logo" />
      <div>
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  );
};

export default Header;
