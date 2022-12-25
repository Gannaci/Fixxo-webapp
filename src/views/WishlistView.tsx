import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';


const WishlistView: React.FC = () => {
  window.parent.document.title ='Fixxo. | Wishlist '
  return (
    <>
    <MainMenuSection />
    <FooterSection/>
    </>
  )
}

export default WishlistView