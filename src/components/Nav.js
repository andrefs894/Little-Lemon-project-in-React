import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../assets/icon _hamburger menu.svg'

function Nav() {
    return (
        <nav>
            <div className="menu">
                <Link to="/" className="nav-item"><h3>Home</h3></Link>
                <Link to="/about" className="nav-item"><h3>About</h3></Link>
                <Link to="/menu" className="nav-item"><h3>Menu</h3></Link>
                <Link to="/reservations" className="nav-item"><h3>Reservations</h3></Link>
                <Link to="/orderonline" className="nav-item"><h3>Order online</h3></Link>
                <Link to="/login" className="nav-item"><h3>Login</h3></Link>
            </div>
            <div className="hamburger-menu">
                <img src={Menu} alt="menu" />
            </div>
        </nav>
    )
}

export default Nav