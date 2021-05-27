import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dogHousesReducer, { getDogHouses } from "../../store/dogHouses";
import { NavLink } from "react-router-dom";
import "./DogHouse.css";

const DogHouseContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const dogHouses = useSelector((state) => Object.values(state.dogHouses));

  useEffect(() => {
    dispatch(getDogHouses());
  }, [dispatch]);

  return (
    <div>
      <div>
        {dogHouses.map((dogHouse) => (
          <ul>
            <div className="dogHouseCards">
              <li>
                <img
                  className="dogHouseImg"
                  src={dogHouse.imgUrl}
                  key={dogHouse.id}
                />
              </li>
              <ul className="overview">
                <li>Total dogs allowed - {dogHouse.totalDogsAllowed}</li>
                <li>Total dog mats - {dogHouse.totalDogMats}</li>
                <li>Total yard bathrooms - {dogHouse.totalYardBathrooms}</li>
                <li>Location - {dogHouse.location}</li>
                <li>Summary - {dogHouse.summary}</li>
                <NavLink to="/reservationForm">
                  <button className="buttonDiv2">reserve here</button>
                </NavLink>
              </ul>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default DogHouseContainer;
