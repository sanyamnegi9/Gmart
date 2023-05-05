import React from 'react'
import ReactStars from "react-rating-stars-component";

const ProductCard = () => {

  return (
    <>
      <div className="col-3">
        <div className="product-card position-relative">
          <div className="product-image">
            <img src="images/watch.jpg" alt="watchimage" />
          </div>
          <div className="product-details">
            <h6 className="brand">Apple watch</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              value="3"
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">$100.00</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default ProductCard