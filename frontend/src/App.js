// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from './components/Navigation'
import DogHouses from './components/DogHouses/index'
import Reservations from './components/Reservations/index'
import ReservationForm from './components/Reservations/reservationForm'
import ChangeReservation from './components/Reservations/updateReservation'
import HomePage from './components/HomePage/index'
import * as sessionActions from "./store/session";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/dogHouses'>
            <DogHouses />
          </Route>
          <Route path='/reservationForm'>
            <ReservationForm />
          </Route>
          <Route path='/reservations'>
            <Reservations />
          </Route>
          <Route path='/reservations'>
            <Reservations />
            </Route>
          <Route path='/UpdateReservation/:reservationId'>
            <ChangeReservation/>
          </Route>
          <Route>
            <HomePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
