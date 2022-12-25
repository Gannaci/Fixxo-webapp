import React, { useEffect } from 'react';
import MainMenuSection from '../sections/MainMenuSection';
import SaleMenuSection from '../sections/SaleMenuSection';
import ProductGridSection from '../sections/ProductGridSection';
import TopSellerSection from '../sections/TopSellerSection';
import FooterSection from '../sections/FooterSection';
import FlashSaleSection from '../sections/FlashSaleLeftSection';
import FlashSaleRightSection from '../sections/FlashSaleRightSection';
import BottomMenuSection from '../sections/BottomMenuSection';
import { ProductContextType, useProductContext } from '../contexts/contexts';




const HomeView: React.FC = () => {
  window.parent.document.title ='Fixxo.'
  const {featured, cheapdeals, expensivedeals, getFeatured, getCheapdeals, getExpensivedeals} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeatured(8)
  }, [])

  useEffect(() => {
    getCheapdeals(4)
  }, [])

  useEffect(() => {
    getExpensivedeals(4)
  }, [])



  
  return (
    <>
      <MainMenuSection />
      <SaleMenuSection />
      <ProductGridSection title="Featured Products" items={featured} />
      <TopSellerSection />
      <FlashSaleSection items={cheapdeals} />
      <FlashSaleRightSection items={expensivedeals} />
      <BottomMenuSection />
      <FooterSection/>
    </>
  )
}

export default HomeView