import Logo from '../assets/Logo.svg';
import Nav from './Nav';

function Header() {
    return (
        <header>
            <div className="header">
                <img src={Logo} className="logo" alt="logo" />
                <Nav />
            </div>
        </header>
    )
}

export default Header