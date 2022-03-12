// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Search from "../Search"
import "./index.css"

function Navigation({ isLoaded }) {
  const location = useLocation()
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to={{pathname:"/login", state:{from: location.pathname}}}>Log In</NavLink>
        <NavLink to={{pathname:"/signup", state:{from: location.pathname}}}>Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navbar'>

      <div className='navbar-home'>
        <NavLink exact to="/"><i className="fab fa-airbnb fa-4x"></i></NavLink>
      </div>
      <div className='navbar-search'>
        <Search />
      </div>
      <div className='navbar-links'>
        {isLoaded && sessionLinks}
      </div>

      {/* <div className='navbar-bottom'>

      </div> */}
    </div>


  );
}

export default Navigation;
