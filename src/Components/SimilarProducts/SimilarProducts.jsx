import React from 'react'

import Item from '../Item/Item'
import data_product from '../Assests/data'

const SimilarProducts = () => {
  return (
    <div className='container1 d-flex flex-wrap'>
      <h1>Similar Products</h1>
      <hr />
      <div>
      {data_product.map((item, i) => {
              return <Item key={i} id={item.id} brand={item.brand} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
      </div>
    </div>
  )
}

export default SimilarProducts
