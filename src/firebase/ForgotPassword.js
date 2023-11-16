import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./config";
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const history = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(database, emailVal).then(data=>{
      
        swal("Good job!", "Check Your Email", "success");
        history("/")
    }).catch(err=>{
        swal("Error", (err.code), "error");
        
    })
      
  };
  return (
    <div>
      <div className="register-photo">
        <div className="form-container">
          <div className="image-holder"></div>

          <form onSubmit={(e) => handleSubmit(e)}>
            <h2 className="text-center">
              <strong>Password Reset</strong> an account.
            </h2>
            <div className="form-group mb-4">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>

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
                
              >
                Reset
              </button>
            </div>
          </form>

          {/* signup End  */}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
