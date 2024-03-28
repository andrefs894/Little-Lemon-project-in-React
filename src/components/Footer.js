import Logo from '../assets/logofooter.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div>
                    <img src={Logo} className="logo" alt="logo" />
                </div>
                <div className="address">
                    <h4>Address:</h4>
                    <p>123 N Oak Street</p>
                    <p>Chicago, IL 60611 </p>
                    <p>USA</p>
                </div>
                <div className="contact">
                    <h4>Contact:</h4>
                    <p>Phone: +1 (312) 555-7890</p>
                    <p>Email: info@littlelemon.com</p>
                </div>
                <div className="links">
                    <h4>Social media:</h4>
                    <div className="icons">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                        <FontAwesomeIcon icon={faTiktok} size="2x" />
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright Little Lemon. All rights reserved.</p>
                    <hr />
                </div>
            </div>
        </footer>
    )
}

export default Footer