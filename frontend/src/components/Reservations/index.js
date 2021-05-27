import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../../store/reservations'
import { NavLink } from 'react-router-dom';
import "./reservations.css";

const ReservationsList = () => {
  // Declare variables from hooks
  const dispatch = useDispatch();
  const reservations = useSelector((state) => Object.values(state.reservations))

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch])

  return (
    <div>
      <div className="rez">
      {reservations.map(reservation => (
        <ul>
          <li>{reservation.startDate}</li>
          <li>{reservation.endDate}</li>
          <li></li>
          <li></li>
          <NavLink to={`/UpdateReservation/${reservation.id}`}>
           <button className="submitButton">
             Update reservation
           </button>
          </NavLink>
        </ul>
      ))}
     </div>
    </div>
  );

};


export default ReservationsList;
