import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className="top-half">
            <div className="container">
                <h5>KiddushRoom</h5>
                <ul className="footer-links-row-1">
                    <li className="nav-li"><Link to={'/'}>Home</Link></li>
                    <li className="nav-li"><Link to={'/single-category-page/wellness'}>Wellness</Link></li>
                    <li className="nav-li"><Link to={'/single-category-page/travel'}>Travel</Link></li>
                    <li className="nav-li"><Link to={'/single-category-page/food & tradition'} className="nav-link">Food &amp; Tradition</Link></li>
                    <li className="nav-li"><Link to={'/single-category-page/recipe'}>Recipe</Link></li>
                </ul>
            </div>
        </div>
        <div className="bottom-half">
            <p>&copy; Copyright 2022, KiddushRoom</p>
            <p>Design + Developent by <a href="https://shalomkohn.com">Shalom Websites</a></p>
        </div>
    </div>
  )
}

export default Footer