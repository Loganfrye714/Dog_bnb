import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dogHousesReducer, { getDogHouses } from '../../store/dogHouses'

const DogHouseContainer = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const dogHouses = useSelector((state) => Object.values(state.dogHouses))

  useEffect(() => {
    dispatch(getDogHouses());
  }, [dispatch])

  return (
    <div>
      <div className="dogHouses">
      {dogHouses.map(dogHouse => (
        <ul>
          <li>
          <img src={dogHouse.imgUrl} key={dogHouse.id}/>
          </li>
        </ul>
      ))}
     </div>
    </div>
  );

};


export default DogHouseContainer;
