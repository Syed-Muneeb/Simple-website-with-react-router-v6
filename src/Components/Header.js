import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="nav-container">
               <li> <Link to="/">  Home </Link> </li>
               <li><Link to ="about"> About </Link></li>
               <li><Link to ="services"> Services</Link> </li>
               <li><Link to ="Contact"> Contact </Link> </li>
        </div>
    )
}

export default Header
