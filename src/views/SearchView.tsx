import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';


const SearchView: React.FC = () => {
  window.parent.document.title ='Fixxo. | Search '
  return (
    <>
    <MainMenuSection />
    <FooterSection/>
    </>
  )
}

export default SearchView