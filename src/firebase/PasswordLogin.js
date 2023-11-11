import React from 'react'

const PasswordLogin = () => {
  return (
    <div>
      <div class="register-photo">
        <div class="form-container">
          <div class="image-holder"></div>
          <form>
            <h2 class="text-center">
              <strong>Login</strong> an account.
            </h2>
            <div class="form-group mb-2">
              <input
                class="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div class="form-group mb-2">
              <input
                class="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
           
            <div class="form-group">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    class="form-check-input shadow-none "
                    type="checkbox"
                  />
                  I agree to the license terms.
                </label>
              </div>
            </div>
            <div class="form-group mb-3">
              <button class="btn btn-primary btn-block shadow-none" type="submit">
                Login
              </button>
              <button class="btn btn-primary-emphasis btn-block shadow-none ms-3" type="submit">
                Signup
              </button>
            </div>
            <a href="#" class="already">
              You already have an account? Login here.
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PasswordLogin
