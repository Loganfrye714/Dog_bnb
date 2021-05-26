import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../../store/reservations'
import { NavLink } from 'react-router-dom';

const ReservationsList = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const reservations = useSelector((state) => Object.values(state.reservations))

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch])
  console.log(reservations);

  return (
    <div>
      <div className="rez">
      {reservations.map(reservation => (
        <ul>
          <li>{reservation.startDate}</li>
          <li>{reservation.endDate}</li>
          <li>{reservation.price} per night</li>
          <li>{reservation.totalCost}</li>
          <NavLink to="/reservationForm">
           <button>
             edit reservation
           </button>
          </NavLink>
        </ul>
      ))}
     </div>
    </div>
  );

};


export default ReservationsList;
