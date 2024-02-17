
import React from 'react';

const ProductCard = ({ image, title, originalPrice, discountedPrice }) => {
  return (
    <div className="product-card">
      <div className="product-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="product-details">
        <h3>{title}</h3>
        <div className="prices">
          <span className="original-price">₹{originalPrice}</span>
          <span className="discounted-price">₹{discountedPrice}</span> 
          <span className='discount'>(50% Off)</span>
          <div className="rating-container">
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1708097966/Group_450_txyo3o.png"
            alt="star"
            className="cart"
          />
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default ProductCard;
