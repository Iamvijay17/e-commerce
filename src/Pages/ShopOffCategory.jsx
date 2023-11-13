import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

import all_productData from '../Components/Assests/all_productData';
import DiscountItem from '../Components/Item/DiscountItem';

const ShopOffCategory = (props) => {
  const { all_productData } = useContext(ShopContext);

  return (
    <div className=''>
      <img src={props.banner} alt="" className='w-100' />
      
      <div className='container1 d-flex flex-wrap'>
        {all_productData.map((item, i) => {
          if (props.discount == item.discount) {
            return <DiscountItem key={i} id={item.id} brand={item.brand} name={item.name} image={item.image} image1={item.image1} image2={item.image2} image3={item.image3} image4={item.image4} image5={item.image5} new_price={item.new_price} old_price={item.old_price} 
            discount={item.discount}
            />
          }

          else {
            return null;
          }



        })}


        
      </div>
    </div>
  )
}

export default ShopOffCategory