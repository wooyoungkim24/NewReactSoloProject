// frontend/src/components/SignupFormPage/index.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./index.css"

function SignupFormPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .then(handleGoBack)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };
  const handleGoBack = () => {
    if (location.state.from !== "/login" && location.state.from !== "/signup") {
      history.goBack();
    } else {
      history.push("/")
    }
  }

  return (
    <div className="signup-form-page">
      <div className="signup-form-container">
        <form id='signup-form' onSubmit={handleSubmit}>
          <div className='signup-form-title'>
            <p>Welcome To CityBrb!</p>
          </div>
          <div className="signup-form-errors">
            <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>

          <div className="signup-form-email">
            <label>
              Email:
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>

          <div className="signup-form-user">
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>


          <div className="signup-form-password">
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


          <div className="signup-form-password">
            <label>
              Confirm Password: 
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>

    </div>

  );
}

export default SignupFormPage;
