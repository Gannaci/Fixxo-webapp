import React from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import { useParams } from 'react-router-dom';

const ProductsDetailsView = () => {
    window.parent.document.title ='Fixxo. | Products '
    const params = useParams()
  return (
    <>
    <MainMenuSection />
        <div className="container m-5">
            <h1>{params.name}</h1>
        </div>
      <FooterSection />
      </>
  )
}

export default ProductsDetailsView