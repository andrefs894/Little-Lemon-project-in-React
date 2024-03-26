import React from 'react';
import { useState } from 'react';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className="menu">
                <ul>
                    <li><a href="#"><h3>Home</h3></a></li>
                    <li><a href="#"><h3>About</h3></a></li>
                    <li><a href="#"><h3>Menu</h3></a></li>
                    <li><a href="#"><h3>Reservations</h3></a></li>
                    <li><a href="#"><h3>Order online</h3></a></li>
                    <li><a href="#"><h3>Login</h3></a></li>
                </ul>
            </div>
            <div className="hamburger-menu">
                <button type="button"><h3>Menu</h3></button>
            </div>
        </nav>
    )
}

export default Nav