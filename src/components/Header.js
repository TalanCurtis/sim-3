import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import image_home from '../images/home.png'
import image_search from '../images/search.png'

export default function Header() {
    return (
        <div className="Header">
            <h1>Helo</h1>
            <Link to='/'>Login</Link>
            <Link to='/Dashboard'><img src={image_home} alt=""/></Link>
            <Link to='/Search'><img src={image_search} alt=""/></Link>
            <Link to='/Profile'>Profile</Link>
            <a href="http://localhost:3006/logout"><button>Logout</button></a>
    </div>
    )
}