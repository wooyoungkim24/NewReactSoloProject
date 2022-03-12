// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import {useHistory, useLocation} from 'react-router-dom'
import "./index.css"

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };


  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout())
    .then(() => window.location.reload(true))

  };

  return (
    <>
      <button onClick={openMenu} className="profile-button">
        <i className="fas fa-user-circle fa-3x" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li id="trips-profile-button" onClick={() => history.push(`/profile/trips/${user.id}`)}>Trips</li>
          <li id='hosted-profile-button'onClick={() => history.push(`/hosted/spots/${user.id}`)} >Hosted Spots</li>
          <li>
            <button id= 'logout-button' onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
