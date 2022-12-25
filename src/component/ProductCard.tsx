import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductItems } from '../assets/moduels/Productmoduels';

interface ProductGridType {
    item: ProductItems
}

const ProductCard: React.FC<ProductGridType> = ({item}) => {

  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                <img src={item.imageName} alt={item.name} />
                <div className="card-menu d-xl-none">
                    <button className="menu-link">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                    <button className="menu-link">
                        <i className="fa-regular fa-repeat"></i>
                    </button>
                    <button className="menu-link">
                        <i className="fa-regular fa-bag-shopping"></i>
                    </button>
                </div>
                <NavLink to={`/products/${item.articleNumber}`} className="btn-theme btn-card-theme d-xl-none">
                    <span className="corner-left"></span>
                    <span className="corner-right"></span>
                    Quick View
                </NavLink>
            </div>
            <div className="card-body">
                <p className="card-category">{item.category}</p>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard