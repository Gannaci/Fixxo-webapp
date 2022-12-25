import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import imgleft from '../assets/images/showcase-left.png';
import imgright from '../assets/images/showcase-right.png';

const SaleMenuSection: React.FC = () => {
  return (
    <section className="sale-menu container">
      <img src={imgleft} className="img-left d-none d-lg-block d-xl-block" alt="showcase woman" />
      <div className="sale-menu-body">
          <h1> Sale Up</h1>
          <h1>To 50% Off</h1>
          <p>Online Shopping free home delivery over $100</p>
          <NavLink className="btn-theme" to="/products">
              <span className="corner-left"></span>
              SHOP NOW
              <span className="corner-right"></span>
          </NavLink>
      </div>
      <img src={imgright} className="img-right d-none d-lg-block d-xl-block" alt="showcase man" />
    </section>
  )
}

export default SaleMenuSection