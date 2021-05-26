// -> view reservation
// Define Action Types as Constants
import { csrfFetch } from './csrf';
const SET_RESERVATION = 'reservation/SET_RESERVATION'
const UPDATE_RESERVATION = 'reservation/UPDATE_RESERVATION'
const SET_SINGLE_RESERVATION= 'reservation/SET_SINGLE_RESERVATION'

// Define Action Creators

const setReservation = (reservations) => ({
  type: SET_RESERVATION,
  reservations,
})

const setSingleReservation = (reservation) => ({
  type: SET_SINGLE_RESERVATION,
  reservation
})

const updateReservation = (reservation) => ({
  type: UPDATE_RESERVATION,
  reservation,
})

// Define Thunks
export const getReservations = () => async (dispatch) => {
  const res = await fetch('/api/reservations');
  const reservations = await res.json()
  dispatch(setReservation(reservations))
}

export const bookReservation = (reservation) => async (dispatch) => {
  const { userId, dogHouseId, startDate, endDate, price, totalCost } = reservation;
  const res = await csrfFetch('/api/reservations', {
    method: "POST",
    body: JSON.stringify({
      userId,
      dogHouseId,
      startDate,
      endDate,
      price,
      totalCost
    }),
  });
  const reservations = await res.json();
  dispatch(setSingleReservation(reservations.reservation));
};

export const changeReservation = (reservation) => async (dispatch) => {

  const { userId, dogHouseId, startDate, endDate, price, totalCost } = reservation;
  const res = await csrfFetch('/api/reservations', {
    method: "PUT",
    body: JSON.stringify({
      userId,
      dogHouseId,
      startDate,
      endDate,
      price,
      totalCost
    }),
  });
  const reservations = await res.json();
  dispatch(updateReservation(reservations.reservation));
};

// Define an inital state
const initalState = {}

// Define a reducer
const reservationReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_RESERVATION:
      const newState = { ...state };
      action.reservations.forEach((reservation) => {
        newState[reservation.id] = reservation
      })
      return newState;
    case (SET_SINGLE_RESERVATION): {
        const newState = { ...state };
        newState[action.reservation.id] = action.reservation
      return newState}
    case (UPDATE_RESERVATION): {
        const newState = { ...state };
        newState[action.reservation.id] = action.reservation
    return newState}
    default:
      return state;
  }
}

export default reservationReducer;








// - create reservation










// - edit reservation








// - delete reservation
