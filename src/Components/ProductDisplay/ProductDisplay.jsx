import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart, removeFromCart} = useContext(ShopContext);
    return (
        <div className='container mt-5'>

            <div className='row'>
                <div className="col-1">
                    <div className="thumbs">
                        <a className="thumb-image active" href={product.image1} data-index="0">
                            <span><img src={product.image1} className='side-thumb' /></span>
                        </a>
                        <a className="thumb-image" href={product.image2} data-index="1">
                            <span><img src={product.image2} className='side-thumb' /></span>
                        </a>
                        <a className="thumb-image" href={product.image3} data-index="2">
                            <span><img src={product.image3} className='side-thumb' /></span>
                        </a>
                        <a className="thumb-image" href={product.image4} data-index="3">
                            <span><img src={product.image4} className='side-thumb' /></span>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <img src={product.image} className='big-img' alt="" />
                </div>
                <div className="col">
                    <div className="row">
                        <p className='productName'>{product.name}</p>
                    </div>
                    <div className="row">
                        <div className="col">

                            <p className='productPrice1'>₹ {product.new_price}</p>

                        </div>
                        <div className="col">
                            <div>
                                <p className="product-prices">
                                    <span className="list-price"><p style={{ fontSize: ".60em", }}>Old Price</p>
                                    <s>₹{product.old_price}</s>
                                    </span>
                                    <span className="price">{product.discount}</span>
                                </p>
                            </div>
                        </div>
                        <div className="col mt-4">

                            <span className='productShipTag'>Free Shipping</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-3">
                            SELECT SIZE
                            <div className="btn-group ms-3" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check btn-smm shadow-none badge " name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                                <label className="btn sizetxt btn-smm btn-outline-secondary p-1 shadow-none" htmlFor="btnradio1">UK SIZE</label>

                                <input type="radio" className="btn-check btn-smm shadow-none" name="btnradio" id="btnradio2" autoComplete="off" />
                                <label className="btn sizetxt btn-outline-secondary btn-smm p-1 shadow-none " htmlFor="btnradio2">BRAND SIZE</label>


                            </div>
                        </div>

                        <div className="">
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check " name="size" id="size1" autoComplete="off" />
                                <label className="btn btn-sm btn-outline-secondary me-2 rounded-5 shadow-none" htmlFor="size1">S</label>

                                <input type="radio" className="btn-check " name="size" id="size2" autoComplete="off" defaultChecked />
                                <label className="btn btn-sm btn-outline-secondary rounded-5 me-2 shadow-none" htmlFor="size2">M</label>

                                <input type="radio" className="btn-check" name="size" id="size3" autoComplete="off" />
                                <label className="btn btn-sm btn-outline-secondary me-2 rounded-5 shadow-none" htmlFor="size3">L</label>

                                <input type="radio" className="btn-check" name="size" id="size4" autoComplete="off" />
                                <label className="btn btn-sm btn-outline-secondary me-2 rounded-5 shadow-none" htmlFor="size4">XL</label>

                                <input type="radio" className="btn-check" name="size" id="size5" autoComplete="off" />
                                <label className="btn btn-sm btn-outline-secondary me-2 rounded-5 shadow-none" htmlFor="size5">2XL</label>

                                <input type="radio" className="btn-check" name="size" id="size6" autoComplete="off" />
                                <label className="btn btn-sm btn-outline-secondary me-2 rounded-5 shadow-none" htmlFor="size6">3XL</label>
                            </div>
                        </div>


                    </div>
                    <div className="row mt-5">
                        <div className="col-5">
                            <button type="button" onClick={()=>{addToCart(product.id)}} className="btn btn-lg btn-primary rounded-pill shadow-none"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                            
                        </div>
                        <div className="col">
                            <button type="button" onClick={()=>{removeFromCart(product.id)}} className="btn btn-lg btn-warning rounded-pill text-white shadow-none"><i className="fa-solid fa-shop"></i> Buy Now</button>
                        </div>
                    </div>
                </div>


            </div>




        </div>
    )
}

export default ProductDisplay
