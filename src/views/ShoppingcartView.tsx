import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';


const ShoppingcartView: React.FC = () => {
  window.parent.document.title ='Fixxo. | Cart '
  return (
    <>
    <MainMenuSection />
    <FooterSection/>
    </>
  )
}

export default ShoppingcartView