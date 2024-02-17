
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="logo">T</span>
        <span className="logo">A</span>
        <span className="logo">N</span>
        <span className="logo">N</span>
        <span className="logo"> </span>
        <span className="logo">T</span>
        <span className="logo">R</span>
        <span className="logo">I</span>
        <span className="logo">M</span>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">Bags</li>
          <li className="nav__item">Travel</li>
          <li className="nav__item">Accessories</li>
          <li className="nav__item">Gifting</li>
          <li className="nav__item">Jewelry</li>
        </ul>
      </nav>
      <div className="header__icons">
      <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1708082506/Frame_51_to9oe1.png"
            alt="search"
          />
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1708082558/Frame_52_kbc5wn.png"
            alt="search"
          />
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1708082635/Frame_53_gbajas.png"
            alt="search"
          />
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1708082683/shopping-bag_v1byrs.png"
            alt="search"
          />
      </div>
    </header>
  );
};

export default Header;
