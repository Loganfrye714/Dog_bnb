// -> view reservation
// Define Action Types as Constants
const SET_RESERVATION = 'reservation/SET_RESERVATION'

// Define Action Creators
const setReservation = (reservations) => ({
  type: SET_RESERVATION,
  reservations,
})

// Define Thunks
export const getReservations = () => async (dispatch) => {
  const res = await fetch('/api/reservations');
  const reservations = await res.json()
  dispatch(setReservation(reservations))
}

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
    default:
      return state;
  }
}

export default reservationReducer;








// - create reservation










// - edit reservation








// - delete reservation
