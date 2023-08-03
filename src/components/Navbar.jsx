import React, { useState } from 'react'
import Logo from './../assets/icons/my-nav-brand.svg'

const Navbar = () => {
  
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(prevSlide => !prevSlide)
  }



  return (
    <header className="header" >
        <nav className="header__nav">
            <img src={Logo} alt="Lloyd Carie's Logo" className="header__nav__logo"/>
            {/* <h3 className="header__nav__title">Carieman</h3> */}
        </nav>

        <svg className='header__menu' onClick={handleMenu} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_85_27" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_85_27)">
            <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#F7F7F7" />
          </g>
        </svg>

        <ul className={`header__ul ${window.innerWidth >= 790 ? 'flex' :  (menu ? 'hidden' : 'flex')}`}>
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