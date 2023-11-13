import React from 'react'

import Item from '../Item/Item'
import data_product from '../Assests/data'

const SimilarProducts = () => {
  return (
   <div>
      <p className='fs-3 text-center mt-3'>Similar Products</p>
     <div className='container1 d-flex flex-wrap'>
      <hr />
      <div>
      {data_product.map((item, i) => {
              return <Item key={i} id={item.id} brand={item.brand} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} madefor={item.madefor} />
            })}
      </div>
    </div>
   </div>
  )
}

export default SimilarProducts
