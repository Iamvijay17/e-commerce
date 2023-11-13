import React, { useContext } from 'react'
import './Payment.css'
import { ShopContext } from '../../../Context/ShopContext'
import { Link } from 'react-router-dom'


const PaymentSuccess = () => {
    const { getTotalCartPrice } = useContext(ShopContext)

    return (
        <div>
            <div class="paymentsuccesspage">
                <div class="printer-top"></div>

                <div class="paper-container">
                    <div class="printer-bottom"></div>

                    <div class="paper">
                        <div class="main-contents">
                            <div class="success-icon">&#10004;</div>
                            <div class="success-title">
                                Payment Complete
                            </div>
                            <div class="success-description">
                                Thank you for completing the payment! You will shortly receive an email of your payment.
                                <div className=''><p>Transection ID: <b>65123423455</b></p></div>
                            </div>
                            
                            <div class="order-details">
                                <div class="order-number-label">Total Amount</div>
                                <div class="order-number">₹ {getTotalCartPrice()}</div>
                                {/* <div class="order-number">T1234-5678-9012-3456</div> */}
                                <div class="complement">Thank You!</div>
                            </div>
                        </div>
                        <div class="jagged-edge"></div>
                    </div>
                </div>
                <div className='text-center'>
                   <Link to="/home"> <a className='btn btn-sm btn-success shadow-none me-5'>Done </a></Link>
                    <a className='btn btn-sm btn-outline-danger shadow-none ' download="Invoice" href="https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf">Download Recipt

                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess
