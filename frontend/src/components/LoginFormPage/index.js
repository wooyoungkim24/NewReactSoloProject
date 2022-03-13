import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import "./index.css"

function LoginFormPage() {
  const location = useLocation()
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);




  const handleSubmit = (e) => {

    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      // .then(() => console.log(location.state, location.state.from))
      .then(handleGoBack)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleGoBack = () => {
    if (location.state.from !== "/login" && location.state.from !== "/signup") {
      history.goBack();
    } else {
      history.push("/")
    }
  }
  const handleDemo = (e) => {
    return dispatch(sessionActions.login({ credential: 'horton@hears.who', password: 'password6' }))
      .then(handleGoBack)
  }



  return (
    <div className='login-form-page'>
      <div className='login-form-container'>
        <form autocomplete="off" id='login-form' onSubmit={handleSubmit}>
          <div className='login-form-title'>
            <p>Welcome Back!</p>
          </div>
          <div className='login-form-errors'>
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>
          <div className='login-form-user'>
            <label>
              Username or Email:
              <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
          </div>

          <div className='login-form-password'>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Log In</button>
        </form>
        <div className="demo-user-button">
          <button type="button" onClick={handleDemo}>Demo User Horton</button>
        </div>
      </div>


    </div>

  );
}

export default LoginFormPage;
