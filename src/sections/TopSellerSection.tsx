import React from 'react';
import { NavLink } from 'react-router-dom';
import Pamela from "../assets/images/pamela-img.svg";
import Letsimg from "../assets/images/lets-img.svg";


const TopSellerSection: React.FC = () => {
  return (
    <section className="top-pick-menu">
        <div className="container">
            <div className="pamela">
              <img src={Pamela} alt="Pamela top picks"/>
              <h1>Pamela Reif's</h1>
              <h2>Top Picks</h2>
              <NavLink className="btn-theme btn-top" to="/products">
                <span className="corner-left left"></span>
                FLASH SALE
                <span className="corner-right right"></span>
              </NavLink>
            </div>
            <div className="lets">
              <img src={Letsimg} alt="Lets be Conscious"/>
              <h1>Lets be</h1>
              <h2>Conscious</h2>
              <NavLink className="btn-theme btn-top" to="/products">
                <span className="corner-left left"></span>
                FLASH SALE
                <span className="corner-right right"></span>
              </NavLink>
            </div>
        </div>
    </section>
  )
}

export default TopSellerSection