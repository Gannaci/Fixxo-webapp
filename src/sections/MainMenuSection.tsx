import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const MainMenuSection: React.FC= () => {
const [showMenu, setShowMenu ] = useState<boolean>(false)

const toggleMenu = () => {
    setShowMenu(!showMenu)
}

  return (
    <nav className="main-menu container">
        <NavLink className="logo-type" to="/" end>Fixxo.</NavLink>

        <div className={`main-menu-links ${ showMenu ? "d-grid" : "" }`}>
            <NavLink className="main-menu-link" to="/" end>Home</NavLink>
            <NavLink className="main-menu-link" to="/categories" end>Categories</NavLink>
            <NavLink className="main-menu-link" to="/products">Products</NavLink>
            <NavLink className="main-menu-link" to="/contacts" end >Contacts</NavLink>
        </div>

        <div className="main-menu-icons">
            <NavLink  to="/search" end className="main-menu-icon">
              <i className="fa-regular fa-magnifying-glass"></i>
            </NavLink> 
            <NavLink to="/compare" end className="main-menu-icon d-none d-md-flex">
              <i className="fa-regular fa-repeat"></i>
            </NavLink>
            <NavLink to="/wishlist" end className="main-menu-icon d-none d-md-flex">
              <i className="fa-regular fa-heart"></i>
            </NavLink>

            <NavLink to="/shoppingcart" end className="main-menu-icon">
              <i className="shopping-bag fa-regular fa-bag-shopping"></i>
              </NavLink>

            <button onClick={toggleMenu} className="d-xl-none main-menu-icon btn-main-icon"><i className="fa-regular fa-bars"></i></button>
        </div>
    </nav>
  )
}

export default MainMenuSection