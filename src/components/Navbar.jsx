import React from 'react'
import Logo from './../assets/icons/my-nav-brand.svg'

const Navbar = () => {
  return (
    <header className="header">
        <nav className="header__nav">
            <img src={Logo} alt="Lloyd Carie's Logo" className="header__nav__logo"/>
            {/* <h3 className="header__nav__title">Carieman</h3> */}
        </nav>
        <ul className="header__ul">
            <li className="header__ul__list">Home</li>
            <li className="header__ul__list">About</li>
            <li className="header__ul__list">Skills</li>
            <li className="header__ul__list">Projects</li>
            <li className="header__ul__list">Contact</li>
        </ul>
    </header>
  )
}

export default Navbar