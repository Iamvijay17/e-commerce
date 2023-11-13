import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from "react-router-dom"
import { ShopContext } from '../../Context/ShopContext';
import { database } from '../../firebase/config';
import { signOut } from 'firebase/auth';

function Navbar  ()  {

  const [login,setLogin] = useState(false)

  const history=useNavigate()

  const handleClick = ()=>{
    signOut(database).then(val=>{
      console.log(val,'val');
      history('/')
    })
  }

  const [menu, setMenu] = useState("shop");

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">

          <a className="navbar-brand" href="/home">Fashion Pass</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/home'><a className="nav-link ">Home</a></Link>
              </li>
              <li className="nav-item">
                <Link to='/mens'><a className="nav-link" >Mens</a></Link>
              </li>
              <li className="nav-item">

                <Link to='/kids'><a className="nav-link">Kids</a></Link>
              </li>
              <li className="nav-item">

                <Link to='/about'><a className="nav-link">About</a></Link>
              </li>




            </ul>

          </div>
          <div className="d-flex ">
            <div className='position-relative'>
              <Link to='/cart'><a className=' text-decoration-none me-5 fs-5 '><i className="fa-solid fa-cart-shopping "></i></a></Link>

              <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                {getTotalCartItems()}
                <span className="visually-hidden">unread messages</span>
              </span>
            </div>

            <div className='dropdown'>
              <a href="/cart" className=' text-decoration-none myacc' data-bs-toggle="dropdown"><i className="fa-solid fa-user me-3"></i>My Account</a>
              <ul className="dropdown-menu ">
                <li><a className="dropdown-item text-black-50 " href="#">My Account</a></li>
                <li><a className="dropdown-item text-black-50 " href="#">Order History</a></li>
                <li><a className="dropdown-item text-black-50 " href="#">Transactions</a></li>
                <li><button className="dropdown-item text-black-50 " onClick={handleClick}>Logout</button></li>
              </ul>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar
