import React from 'react'
import './Section1.css'
import { firststColImg } from './Section1Bg'

const Section1 = () => {
    return (
        <div>
            <div className="row bgrow text-center my-5">
                <div className="col">

                    <a href="" className='text-decoration-none text-black'><img className='verySmall mb-2 mt-3 ' src="https://contents.mediadecathlon.com/s810456/k$3d1c34a67fc4a7d2659a8f40f2f68cb7/Warranty.png?format=auto" alt="" />
                        <p>100+ Stores Across India</p></a>

                </div>
                <div className="col">
                    <a href="" className='text-decoration-none text-black'><img className='verySmall mb-2 mt-3' src="https://contents.mediadecathlon.com/s810455/k$5d275c8ba3f1f586032fc19f5bacf57f/90%20dats%20return.png?format=auto" alt="" />
                    <p>Easy Returns</p></a>
                </div>
                <div className="col">
                    <a href="" className='text-decoration-none text-black '><img className='verySmall mb-2 mt-3' src="https://contents.mediadecathlon.com/s810453/k$b01109de2bacb669e5db58aefa3c6ee9/Free%20delivery.png?format=auto" alt="" />
                    <p>1 M+ happy Customers</p></a>
                </div>
            </div>
        </div>
    )
}

export default Section1
