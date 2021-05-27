import { useEffect, useState } from 'react';
import { Redirect, useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { changeReservation, deleteReservation } from '../../store/reservations'

const UpdateReservation = () => {

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [price, setPrice] = useState(500)
  const [totalCost, settotalCost] = useState(1500)
  const [dogHouseId, setdogHouseNumber] = useState(4)
  const userId = useSelector((state) => state.session.user.id)
  const dispatch = useDispatch()
  const history = useHistory()
  const { reservationId } = useParams()

  const onSubmit = async (e) => {
    e.preventDefault();
    const reservation = {
      reservationId, userId, dogHouseId, startDate, endDate, price, totalCost
    }
    await dispatch(changeReservation(reservation))
    history.push('/reservations')
  };

  const onClick = async (e) => {
    e.preventDefault();
    const reservation = {
      reservationId
    }
    await dispatch(deleteReservation(reservation))
    history.push('/')
  };

  return (
    <div>
      <div className="header">
          <h2>Edit your reservation</h2>
      </div>
      <form className="form" onSubmit={onSubmit}>
        <div>
          <label>Start Date</label>
          <input
          value={startDate}
          type="date"
          id="start"
          name="trip-start"
          onChange={(e) => setStartDate(e.target.value)}
          >
          </input>
        </div>
        <div>
          <label>End Date</label>
          <input
          value={endDate}
          type="date"
          id="start"
          name="trip-End"
          onChange={(e) => setEndDate(e.target.value)}
          >
          </input>
        </div>
        <div>
          <label value={price}>Price per night - $500</label>
        </div>
        <div>
          <label value={totalCost}>Total Price </label>
        </div>
        <div>
          <label value={dogHouseId}>Dog House</label>
        </div>
        <button>Submit</button>
      </form>
      <button onClick={onClick}>Delete Reservation</button>
    </div>
  )

};

export default UpdateReservation ;
