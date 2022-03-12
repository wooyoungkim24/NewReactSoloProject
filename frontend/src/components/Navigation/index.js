// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import Search from "../Search"
import "./index.css"

function Navigation({ isLoaded }) {
  const location = useLocation()
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <button id='login-button' onClick={() =>history.push({pathname:"/login", state:{from: location.pathname}})}>Log In</button>
        <button id='signup-button' onClick={() =>history.push({pathname:"/signup", state:{from: location.pathname}})}>Sign Up</button>
        {/* <NavLink id='login-link' to={{pathname:"/login", state:{from: location.pathname}}}>Log In</NavLink>
        <NavLink id='signup-link' to={{pathname:"/signup", state:{from: location.pathname}}}>Sign Up</NavLink> */}
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
