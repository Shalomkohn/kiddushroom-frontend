import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaBorderNone, FaWindowClose } from 'react-icons/fa'


function Nav({ isAuth, signUserOut }) {
  const [menuOpen, setMenuOpen] = useState('closed')

  const handleClose = () => {
    setMenuOpen('closed')
  }

  const handleOpen = () => {
    setMenuOpen('')
  }

  const navLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Wellness',
      path: '/single-category-page/wellness'
    },
    {
      name: 'Travel',
      path: '/single-category-page/travel'
    },
    {
      name: 'Food & Tradition',
      path: '/single-category-page/food%20&%20tradition'
    },
    {
      name: 'Recipe',
      path: '/single-category-page/recipe'
    }
  ]

  const activeStyle = ({ isActive }) => {
    return {
      opacity: isActive && '0.5'
    }
  }
  
  return (
    <nav className="nav-bar">
        <div className='container'>
            <span className='logo'><Link to={'/'}>KiddushRoom</Link></span>
            <ul className="nav-ul">
                {
                  navLinks.map( link => <li id={link.name} className="nav-li"><NavLink to={link.path} style={activeStyle}>{link.name}</NavLink></li> )
                }
            </ul>
            <FaBars className='menu-button' onClick={() => handleOpen()}/>
            <div className={`mobile-menu ${menuOpen}`}>
              <div>
                <span className='logo'>KiddushRoom</span>
                <FaWindowClose className='close-menu-button' onClick={() => handleClose()}/>
              </div>
              <ul className="nav-ul-mobile">
                {
                  navLinks.map( link => <li id={link.name} className="nav-li"><NavLink to={link.path} style={activeStyle}>{link.name}</NavLink></li> )
                }
              </ul>
            </div>
        </div>  
    </nav>
  )
}

export default Nav