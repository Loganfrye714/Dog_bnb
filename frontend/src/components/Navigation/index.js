// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <ul>
        <li><NavLink to="/login">Log In</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
      </ul>
      </>
    );
  }

  return (
    <div className="navBar">
      <header>
        <img class="logo" src='https://thumbs.dreamstime.com/b/cartoon-dog-running-bone-13073342.jpg' alt="logo"></img>
        <nav >
          <ul class="navLinks">
            <li>Airbnb for dogs</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/dogHouses">Dog Houses</NavLink></li>
            <li> {isLoaded && sessionLinks}</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
