import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import SimilarProducts from '../Components/SimilarProducts/SimilarProducts';

const Product = () => {
  const {all_productData}= useContext(ShopContext);
  const {productId} = useParams();
  const product = all_productData.find((e)=> e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <SimilarProducts/>
    </div>
  )
}

export default Product
