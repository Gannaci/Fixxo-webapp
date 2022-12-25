import React from 'react';
import { ProductItems } from '../assets/moduels/Productmoduels';
import ProductCard from '../component/ProductCard';

interface ProductCardType {
  title: string
  items: ProductItems[]
}

const ProductGridSection: React.FC<ProductCardType> = ({title, items = []}) => {

  return (
    <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              {
                items.map( product => <ProductCard key={product.articleNumber} item={product} />)
              }
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection