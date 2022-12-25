import React, { useEffect }  from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import FooterSection from '../sections/FooterSection';
import ProductGridSection from '../sections/ProductGridSection';
import BreadcrumbSection from '../sections/BreadcrumbSection';
import { ProductContextType, useProductContext } from '../contexts/contexts';


const ProductsView: React.FC = () => {
  window.parent.document.title ='Fixxo. | Products '
  const {products, getAll} = useProductContext() as ProductContextType
  
  useEffect (() => {
    getAll()
  }, [])
  
  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Products" />
    <ProductGridSection title="Products" items={products} />
    <FooterSection/>
    </>
  )
}

export default ProductsView