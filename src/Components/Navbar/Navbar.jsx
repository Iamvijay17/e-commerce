import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from "react-router-dom"
import { ShopContext } from '../../Context/ShopContext';
import { database } from '../../firebase/config';
import { signOut } from 'firebase/auth';

function Navbar() {

  const texts = ['Search for something…', 'Search for other…', 'One more search'];
  const input = document.querySelector('#searchbox');
  const animationWorker = function (input, texts) {
    this.input = input;
    this.defaultPlaceholder = this.input.getAttribute('placeholder');
    this.texts = texts;
    this.curTextNum = 0;
    this.curPlaceholder = '';
    this.blinkCounter = 0;
    this.animationFrameId = 0;
    this.animationActive = false;
    this.input.setAttribute('placeholder', this.curPlaceholder);

    this.switch = (timeout) => {
      this.input.classList.add('imitatefocus');
      setTimeout(
        () => {
          this.input.classList.remove('imitatefocus');
          if (this.curTextNum == 0)
            this.input.setAttribute('placeholder', this.defaultPlaceholder);
          else
            this.input.setAttribute('placeholder', this.curPlaceholder);

          setTimeout(
            () => {
              this.input.setAttribute('placeholder', this.curPlaceholder);
              if (this.animationActive)
                this.animationFrameId = window.requestAnimationFrame(this.animate)
            },
            timeout);
        },
        timeout);
    }

    this.animate = () => {
      if (!this.animationActive) return;
      let curPlaceholderFullText = this.texts[this.curTextNum];
      let timeout = 900;
      if (this.curPlaceholder == curPlaceholderFullText + '|' && this.blinkCounter == 3) {
        this.blinkCounter = 0;
        this.curTextNum = (this.curTextNum >= this.texts.length - 1) ? 0 : this.curTextNum + 1;
        this.curPlaceholder = '|';
        this.switch(3000);
        return;
      }
      else if (this.curPlaceholder == curPlaceholderFullText + '|' && this.blinkCounter < 3) {
        this.curPlaceholder = curPlaceholderFullText;
        this.blinkCounter++;
      }
      else if (this.curPlaceholder == curPlaceholderFullText && this.blinkCounter < 3) {
        this.curPlaceholder = this.curPlaceholder + '|';
      }
      else {
        this.curPlaceholder = curPlaceholderFullText
          .split('')
          .slice(0, this.curPlaceholder.length + 1)
          .join('') + '|';
        timeout = 150;
      }
      this.input.setAttribute('placeholder', this.curPlaceholder);
      setTimeout(
        () => { if (this.animationActive) this.animationFrameId = window.requestAnimationFrame(this.animate) },
        timeout);
    }

    this.stop = () => {
      this.animationActive = false;
      window.cancelAnimationFrame(this.animationFrameId);
    }

    this.start = () => {
      this.animationActive = true;
      this.animationFrameId = window.requestAnimationFrame(this.animate);
      return this;
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    let aw = new animationWorker(input, texts).start();
    input.addEventListener("focus", (e) => aw.stop());
    input.addEventListener("blur", (e) => {
      aw = new animationWorker(input, texts);
      if (e.target.value == '') setTimeout(aw.start, 2000);
    });
  });


  const [login, setLogin] = useState(false)

  const history = useNavigate()

  const handleClick = () => {
    signOut(database).then(val => {
      console.log(val, 'val');
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
            <input className="form-control me-2 w-50" id="searchbox" type="text" name="searchbox" placeholder="Search" aria-label="Search" style={{ marginLeft: "13%" }} />


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
            <button className="navbar-toggler ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar
