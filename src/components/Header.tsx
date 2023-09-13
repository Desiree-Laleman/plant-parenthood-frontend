import "./Header.css";
import { signInWithGoogle, signOut } from "../firebaseConfig";

const Header = () => {
  return (
    <div className="Header">
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Header;
