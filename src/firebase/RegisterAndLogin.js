import React, { useState } from "react";
import "./RegisterAndLogin.css";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { database } from "./config";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          // swal((err.code), "You clicked the button!", "error");
          swal({
            icon: "error",
            title: err.code,
          });
          // alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          // swal((err.code), "You clicked the button!", "error");
          swal({
            icon: "error",
            title: err.code,
          });
          // alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };

  return (
    <div>
      <div className="register-photo">
        <div className="form-container">
          <div className="image-holder"></div>

          <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
            <h2 className="text-center">
              <strong>{login ? "LogIn" : "Create"}</strong> an account.
            </h2>
            <div className="form-group mb-2">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group mb-2">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            {login ? null : (
              <div className="form-group mb-4">
                <input
                  className="form-control"
                  type="password"
                  name="password-repeat"
                  placeholder="Password (repeat)"
                />
              </div>
            )}
            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input shadow-none "
                    type="checkbox"
                  />
                  I agree to the license terms.
                </label>
              </div>
            </div>
            <div className="form-group mb-3">
              <button
                className="btn btn-primary btn-block shadow-none"
                type="submit"
              >
                {login ? "SignIn" : "Signup"}
              </button>
            </div>

            <s className="already">
              {login ? (
                <button
                  className="btn btn-sm shadow-none  border-0 "
                  onClick={() => setLogin(false)}
                >
                  You don't have an account? Click here.
                </button>
              ) : (
                <button
                  className="btn btn-sm shadow-none  border-0 "
                  onClick={() => setLogin(true)}
                >
                  You already have an account? Login here.
                </button>
              )}
              <button
                className="btn btn-sm shadow-none  border-0 "
                onClick={handleReset}
              >
                Forgot Password
              </button>
            </s>
          </form>

          {/* signup End  */}
        </div>
      </div>
    </div>
  );
}

export default RegisterAndLogin;
