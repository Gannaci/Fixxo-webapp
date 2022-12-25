import React from 'react';
import Supporticon from '../assets/images/cutsomer-support-icon.svg';
import Paymenticon from '../assets/images/secure-payment-icon.svg';
import Truckicon from '../assets/images/delivery-truck-icon.svg';

const BottomMenuSection: React.FC = () => {
  return (
    <section className="bottom-menu-info">
        <div className="container-fluid">
            <div className="info-box">
                <img src={Supporticon} alt="" />
                <div>
                    <h2>Customer Support</h2>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
            <div className="info-box">
                <img src={Paymenticon} alt="" />
                <div>
                    <h2>Secured Payment</h2>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
            <div className="info-box">
                <img src={Truckicon} alt="" />
                <div>
                    <h2>Free Home Delivery</h2>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
            <div className="info-box">
                <img src={Truckicon} alt="" />
                <div>
                    <h2>30 Days Return</h2>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BottomMenuSection