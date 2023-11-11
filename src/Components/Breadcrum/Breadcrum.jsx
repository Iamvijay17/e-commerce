import React from 'react'
import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    // <div>
    //   Home <i className="fa-solid fa-arrow-right"></i> Shop <i className="fa-solid fa-arrow-right"></i> {product.category} <i className="fa-solid fa-arrow-right"></i>
    //   {product.name}
    // </div>
    <div className="breadcrumb" role="navigation" aria-label="Breadcrumbs">
    <div className="_cont">
      <ol>
        <li><a title="Back to the frontpage">Home</a></li>
        <li><a title="">{product.category}</a></li>
        <li>{product.name}</li>
      </ol>
    </div>
  </div>
  )
}

export default Breadcrum
