import { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import './Checkout.css'
import CreditCard from './CreditCard/CreditCard';
import { Link } from 'react-router-dom';


function Checkout() {
  const [goSteps, setGoSteps] = useState(0);

  return (

    <div className='container'>
      <p className='text-center fw-bolder mt-5'>Payment Page</p>
      <Stepper activeStep={goSteps}>
        <Step onClick={() => setGoSteps(0)} label="step 1" />
        <Step onClick={() => setGoSteps(1)} label="step 2" />
        <Step onClick={() => setGoSteps(2)} label="step 3" />
      </Stepper>
      {goSteps === 0 && (
        <div className='step-1'>

          <form >
            <form class="form-floating">
              <input type="address" class="form-control shadow-none " id="floatingInputValue" placeholder="billingname" />
              <label for="floatingInputValue">Billing Name</label>
            </form>

            <form class="form-floating">
              <input type="email" class="form-control shadow-none " id="floatingInputValue" placeholder="name@example.com" />
              <label for="floatingInputValue">Email</label>
            </form>
            <form class="form-floating">
              <input type="phne" class="form-control shadow-none " id="floatingInputValue" required placeholder="987654324" maxLength="10" minLength="10" />
              <label for="floatingInputValue">Phone Number</label>
            </form>

            <div className='text-center mt-4'>
              <button onClick={() => setGoSteps(1)} type='submit' className='btn btn-primary shadow-none'>Next</button>
            </div>
          </form>
        </div>
      )}
      {goSteps === 1 && (
        <div>

          <div>
            <form class="form-floating">
              <input type="address" class="form-control shadow-none " id="floatingInputValue" placeholder="address1" />
              <label for="floatingInputValue">Address 1</label>
            </form>
            <form class="form-floating">
              <input type="address" class="form-control shadow-none " id="floatingInputValue" placeholder="address2" />
              <label for="floatingInputValue">Address 2</label>
            </form>
            <form class="form-floating">
              <input type="address" class="form-control shadow-none " id="floatingInputValue" placeholder="city" />
              <label for="floatingInputValue">City</label>
            </form>
            <form class="form-floating">
              <input type="address" class="form-control shadow-none " id="floatingInputValue" placeholder="state" />
              <label for="floatingInputValue">State</label>
            </form>
            <form class="form-floating">
              <input type="phne" class="form-control shadow-none " id="floatingInputValue" placeholder="pincode" maxLength="6" minLength="6" />
              <label for="floatingInputValue">Pincode</label>
            </form>

            <div className='text-center mt-4'>
              <button onClick={() => setGoSteps(0)} className='btn btn-danger shadow-none me-5'>Back</button>
              <button onClick={() => setGoSteps(2)} className='btn btn-primary shadow-none'>Next</button>
            </div>
          </div>
        </div>
      )}
      {goSteps === 2 && (
        <div>
          <CreditCard/>
         
          <div className='text-center'>
            <form>
            <button onClick={() => setGoSteps(1)} className='btn btn-danger shadow-none me-5'>Back</button>
            <Link to="/paymentsuccess"><button type='submit' className='btn btn-primary shadow-none'>Submit</button></Link>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
export default Checkout;