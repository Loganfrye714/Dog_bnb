// Define Action Types as Constants
const SET_DOG_HOUSES = 'dogHouses/SET_DOG_HOUSES'

// Define Action Creators
const setDogHouses = (dogHouses) => ({
  type: SET_DOG_HOUSES,
  dogHouses,
})

// Define Thunks
export const getDogHouses = () => async (dispatch) => {
  const res = await fetch('./api/dogHouses');
  const dogHouses = await res.json();
  dispatch(setDogHouses(dogHouses))
}
// Define an inital state
const initalState = {}

// Define a reducer
const dogHousesReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_DOG_HOUSES:
      const newState = { ...state };
      action.dogHouses.forEach((dogHouse) => {
        newState[dogHouse.id] = dogHouse
      })
      return newState;
    default:
      return state;
  }
}

export default dogHousesReducer;

// Export the reducer
