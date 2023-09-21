import "./LandingPage.css";
import { signInWithGoogle } from "../firebaseConfig";
import clover from "../assets/three-leaf-clover.png";
import logo from "../assets/plant-parenthood-logo.png";

const LandingPage = () => {
  return (
    <div
      className="LandingPage"
      // style={{ backgroundImage: `url(${wateringGif})` }}
    >
      <section id="logo-container">
        <h1 className="logo">
          <img src={logo} alt="Plant Parenthood" />
        </h1>
        <p className="slogan">Your Guide to Happy, Healthy Plants</p>
      </section>
      <div id="paragraph-container">
        <p>Are your plants thirsty or thriving?</p>
        {/* <p className="line">Do you know when they need a little extra love?</p> */}
      </div>
      <img src={clover} alt="clover" className="clover-image" />
      {/* <img src={wateringGif} alt="clover" /> */}
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default LandingPage;
