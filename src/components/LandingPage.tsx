import "./LandingPage.css";
import { signInWithGoogle } from "../firebaseConfig";

interface Props {
  setShowLandingPage: (boolean: boolean) => void;
}

const LandingPage = ({ setShowLandingPage }: Props) => {
  const landingPageCollapse = () => {
    signInWithGoogle();
    setShowLandingPage(false);
  };
  return (
    <div className="LandingPage">
      <button onClick={landingPageCollapse}>Sign in with Google</button>
    </div>
  );
};

export default LandingPage;
