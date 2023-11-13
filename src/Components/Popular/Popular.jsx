import React from 'react'
import data_product from '../Assests/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className=''>
      <h4>Popular</h4>

      <div className='container1'>
        <div className='row'>

          <div className="">
            {data_product.map((item, i) => {
              return <Item key={i} id={item.id} brand={item.brand} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} madefor={item.madefor}/>
            })}
          </div>
        </div>
      </div>



    </div>

  )
}

export default Popular
