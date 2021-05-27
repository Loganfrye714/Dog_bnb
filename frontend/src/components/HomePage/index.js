import { NavLink } from "react-router-dom";
import "./HomePage.css";

const HomePageContainer = () => {
  return (
    <div>
      <div className="banner">
        <div>
          <h1 className="title">Stretch your paws and relax with us</h1>
        </div>
      </div>
      <div className="buttonDiv">
        <NavLink exact to="/dogHouses">
          <button className="buttonReserve"> Book your stay </button>
        </NavLink>
      </div>
      <div className="banner2"></div>
    </div>
  );
};

export default HomePageContainer;
