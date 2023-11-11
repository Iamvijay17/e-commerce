import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './CartItem.css'
import { Link } from 'react-router-dom'

const CartItem = () => {
    const { getTotalCartAmount, all_productData, cartItems, removeFromCart } = useContext(ShopContext)

    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="col-8">Shopping Cart</div>
                <div className="col-1"><p>Price</p></div>
                <div className="col-2"><p>Quantity</p></div>
                <div className="col"><p>Total</p></div>
            </div>

            <hr />
            {all_productData.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div>
                            <div className="row">
                                <div className="col-2">
                                    <img className='CartProductImg' src={e.image} alt="" />
                                </div>
                                <div className="col-6">
                                    <p>{e.brand}</p>
                                    <p>{e.name}</p>
                                </div>
                                <div className="col-1">
                                    <p className=''>₹ {e.new_price}</p>
                                </div>
                                <div className="col-1">
                                    <p>{cartItems[e.id]}</p>
                                </div>
                                <div className="col">
                                    <button type="button" onClick={() => { removeFromCart(e.id) }} className='btn btn-sm btn-danger shadow-none '>Remove</button>
                                </div>
                                <div className="col">
                                    <p className='totalPrice'>₹ {e.new_price * cartItems[e.id]}</p>
                                </div>
                            </div>
                            <hr />
                        </div>

                    )
                }
            })}

            <div>

                <div className="row">
                    <div className="col-9"></div>

                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <p>Subtotal</p>
                                <p>Subtotal</p>
                                <p>Shipping</p>
                                <p>Grand Total</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <p>₹ {getTotalCartAmount()}</p>
                                <p>₹</p>
                                <p>Free</p>
                                <p>₹ {20}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row pb-5">
                    <div className="col"></div>
                    <div className="col-2">
                        <Link to="/checkout">
                            <a class="btn btn-primary shadow-none " type="submit">Proceed to Checkout</a>
                        </Link>
                    </div>
                </div>
            </div>






        </div>
    )
}

export default CartItem
