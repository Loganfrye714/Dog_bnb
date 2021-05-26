import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import dogHousesReducer, { getDogHouses } from '../../store/dogHouses'
import { NavLink } from "react-router-dom";

const DogHouseContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const dogHouses = useSelector((state) => Object.values(state.dogHouses))
  console.log(dogHouses);
  useEffect(() => {
    dispatch(getDogHouses());
  }, [dispatch])

  return (
    <div>
      <div className="dogHouses">
      {dogHouses.map(dogHouse => (
        <ul>
          <li><img src={dogHouse.imgUrl} key={dogHouse.id}/></li>
          <li>Total dogs allowed - {dogHouse.totalDogsAllowed}</li>
          <li>Total dog mats - {dogHouse.totalDogMats}</li>
          <li>Total yard bathrooms - {dogHouse.totalYardBathrooms}</li>
          <li>Summary - {dogHouse.summary}</li>
          <NavLink to="/reservationForm">
           <button>
             reserve here
           </button>
          </NavLink>
        </ul>
      ))}
     </div>
    </div>
  );

};


export default DogHouseContainer;
