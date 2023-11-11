import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item';
import all_productData from '../Components/Assests/all_productData';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className=''>
      <img src={props.banner}  alt="" className='w-100' />
      {/* <h1>Shop categorys page</h1> */}
      <div className='container1 d-flex flex-wrap'>
        {all_productData.map((item,i)=>{
          if (props.category===item.category){
            return <Item key={i} id={item.id} brand={item.brand} name={item.name} image={item.image} image1={item.image1} image2={item.image2} image3={item.image3} image4={item.image4}
            new_price={item.new_price} old_price={item.old_price}
                />
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
