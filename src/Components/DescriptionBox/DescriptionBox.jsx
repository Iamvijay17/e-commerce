import React from 'react'
import './DescriptionBox.css'
import { descriptionImg1, descriptionImg2, descriptionImg3, descriptionImg4, descriptionImg5, descriptionImg6 } from '../Assests/Product_Img'

const DescriptionBox = (props) => {
    const { dis } = props;
  return (
    <div>
      <div className="container descriptionBox ">
        <div className="row">
            <p>Made for</p> <p>sample</p>
        </div>
        <div className="row">Advantages</div>
        <div className="row mt-3 ">
        <div className="col"><div className="row">
            <div className="col">
                <div className="row">
                   <div className="col"> <img src={descriptionImg1} alt=""/> Warmth</div>
                </div>
                <div className="row">
                    <div className="col"><p className='descriptionSubText'>Comfortable between 10°C and 0°C. Wadding with good fill power (100g/sqm).</p></div>
                </div>
            </div>
        </div>
        </div>
        <div className="col"><div className="row">
            <div className="col">
                <div className="row">
                   <div className="col"> <img src={descriptionImg2} alt=""/> User Comfort</div>
                </div>
                <div className="row">
                    <div className="col"><p className='descriptionSubText'>Comfortable between 10°C and 0°C. Wadding with good fill power (100g/sqm).</p></div>
                </div>
            </div>
        </div></div>
        <div className="col"><div className="row">
            <div className="col">
                <div className="row">
                   <div className="col"> <img src={descriptionImg3} alt=""/> Pockets</div>
                </div>
                <div className="row">
                    <div className="col"><p className='descriptionSubText'>Comfortable between 10°C and 0°C. Wadding with good fill power (100g/sqm).</p></div>
                </div>
            </div>
        </div></div>
        <div className="col"><div className="row">
            <div className="col">
                <div className="row">
                   <div className="col"> <img src={descriptionImg4} alt=""/> Easy Maintenance</div>
                </div>
                <div className="row">
                    <div className="col"><p className='descriptionSubText'>Comfortable between 10°C and 0°C. Wadding with good fill power (100g/sqm).</p></div>
                </div>
            </div>
        </div></div>
        <div className="col"><div className="row">
            <div className="col">
                <div className="row">
                   <div className="col"> <img src={descriptionImg6} alt=""/> Ecodesign</div>
                </div>
                <div className="row">
                    <div className="col"><p className='descriptionSubText'>Comfortable between 10°C and 0°C. Wadding with good fill power (100g/sqm).</p></div>
                </div>
            </div>
        </div></div>
        </div>
        
      </div>
    </div>
  )
}

export default DescriptionBox
