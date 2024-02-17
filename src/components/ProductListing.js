
import React from 'react';
import './ProductListing.css'; 

const ProductListing = () => {
  return (
    <div>
    <div className="product-listing">
      <div className="product-item">
        <img src={"https://res.cloudinary.com/dakmxu3dl/image/upload/v1708090599/Frame_461_adzjgl.png"} alt="" />
        <span>All Bags</span>
      </div>
      <div className="product-item">
        <img src={"https://res.cloudinary.com/dakmxu3dl/image/upload/v1708091149/Frame_50_dyajcm.png"} alt="" />
        <span>Vanity Pouch</span>
      </div>
      <div className="product-item">
        <img src={"https://res.cloudinary.com/dakmxu3dl/image/upload/v1708091218/Frame_49_pqt40m.png"} alt="" />
        <span>Tote bag</span>
      </div>
      <div className="product-item">
        <img src={"https://res.cloudinary.com/dakmxu3dl/image/upload/v1708091274/Frame_13_1_jdzqcp.png"} alt="" />
        <span>Duffle Bag</span>
      </div>
      <div className="product-item">
        <img src={"https://res.cloudinary.com/dakmxu3dl/image/upload/v1708091311/Frame_49_1_elbf9h.png"} alt="" />
        <span>Laptop Sleeve</span>
      </div>
      <div className="product-item">
        <img src={"https://res.cloudinary.com/dakmxu3dl/image/upload/v1708091353/Frame_49_2_it65ek.png"} alt="" />
        <span>Messenger Bags</span>
      </div>
      <div className="product-item">
        <img src={"https://res.cloudinary.com/dakmxu3dl/image/upload/v1708091384/Frame_22_ujktm9.png"} alt="" />
        <span>Slings Bgs</span>
      </div>
      <div className="product-item">
        <img src={"https://res.cloudinary.com/dakmxu3dl/image/upload/v1708091432/Frame_20_byo1bv.png"} alt="" />
        <span>Handbags</span>
      </div>
      </div>
      <div>
      <div className="bags-items">
            <p className="bags-desc">Bags . Backpacks</p>
            <div className="products-container">
              <p className="bags-desc">13 products</p>
              <img
                src={"https://res.cloudinary.com/dakmxu3dl/image/upload/v1708091898/Vector_4_tlaena.png"}
                alt="vector"
                className="victor-img"
              />
            </div>
          </div>
          </div>
    </div>
    
  );
};

export default ProductListing;
