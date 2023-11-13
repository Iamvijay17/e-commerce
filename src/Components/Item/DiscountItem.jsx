import React from 'react'
import './Item.css'


const DiscountItem = (props) => {
  return (

    <div className=" product-card with-discount shadow  m-4 d-inline-flex">
        <div className="product-image">
          <img className='w-100' src={props.image} />
          {/* <div className="tag-discount">25%</div>  */}
          <div className="ribbon text-center"><span>{props.discount}</span></div>
        </div>
        <div className="product-detail">
          <div className="product-price-tag">
            <div className="product-name">
              <h4 className="m-0 p-0">{props.brand}</h4>
              <small className="text-muted m-0 p-0 text-truncate d-inline-block " style={{ maxWidth: "190px" }} >{props.name}</small>
            </div>
            <div className="product-price">
              <h5 className="discounted">₹ {props.old_price}</h5>
              <h5 className="discounted-price">₹ {props.new_price}</h5>
            </div>
          </div>
          <div className="product-size-color row mt-1 ">
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
              <div className="text ">
                <h5>Color</h5>
              </div>
              <div className="colors ">
                <div className="color-round color-red"></div>
                <div className="color-round color-blue"></div>
                <div className="color-round color-black"></div>
                <div className="color-round color-orange"></div>
              </div>
            </div>
          </div>
          <div className="cta row">
            <button className="btn btn-primary col-6 btn-cart">Add to Card</button>
            <button className="btn btn-primary col-6 btn-buy">Buy Now</button>
          </div>
        </div>
      </div>
    // <div className='container1 d-inline-flex'>
      
    // </div>
  )
}

export default DiscountItem
