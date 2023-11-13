import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-card without-discount shadow col-3 d-inline-flex m-4">
      <div className="product-image ">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} className='object-fit-cover w-100 ' src={props.image} /></Link>
      </div>
      <div className="product-detail">
        <div className="product-price-tag">
          <div className="product-name">
            <h4 className="m-0 p-0">{props.brand}</h4>
            <small className="text-muted m-0 p-0 text-truncate d-inline-block" style={{ maxWidth: "190px" }}>{props.name}</small>
          </div>
          <div className="product-price">
            <h5>₹{props.new_price}</h5>
          </div>
        </div>
        <div className="product-size-color row mt-3">
          <div className="product-size col-6">
            <div className="text">
              <h5>Size</h5>
              <p>Size Chart</p>
            </div>
            <div className="sizes d-inline-flex">
              <div className="size-square"><span>8</span></div>
              <div className="size-square"><span>9</span></div>
              <div className="size-square"><span>10</span></div>
              <div className="size-square"><span>11</span></div>
            </div>
          </div>
          <div className="product-colors col-6">
            <div className="text">
              <h5>Color</h5>
            </div>
            <div className="colors">
              <div className="color-round color-red"></div>
              <div className="color-round color-blue"></div>
              <div className="color-round color-black"></div>
              <div className="color-round color-orange"></div>
            </div>
          </div>
        </div>
        <div className="cta row">
          <button className="btn btn-primary col-6 btn-cart shadow-none" onClick={() => { addToCart(props.id) }}>Add to Card</button>
          <button className="btn btn-primary col-6 btn-buy shadow-none ">Buy Now</button>
        </div>
      </div>
    </div>



    // <div className='container1 col-3 d-inline-flex'>
    // </div>


  )


}

export default Item;
