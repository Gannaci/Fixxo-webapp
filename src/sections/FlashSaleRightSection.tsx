import React from 'react'
import ProductCard from '../component/ProductCard';
import { NavLink } from 'react-router-dom';
import { ProductItems } from '../assets/moduels/Productmoduels';

interface ProductCardType {
    items: ProductItems[]
  }

const FlashSaleRightSection: React.FC<ProductCardType> = ({ items }) => {
  return (
    <section className="flash-sale-menu-right container">
      <div className="row row-cols-1 row-cols-md-2">
        {
           items.map( product => <ProductCard key={product.articleNumber} item={product} />)
        }
      </div>
        <div className="flash-sale-box">
        <h1 className="flash-sale-title">2 FOR ONE $49</h1>
        <NavLink className="btn-theme btn-flash" to="/products">
                <span className="corner-left left"></span>
                FLASH SALE
                <span className="corner-right right"></span>
        </NavLink>
      </div>
    </section>
  )
}

export default FlashSaleRightSection