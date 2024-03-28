import Restaurant from '../assets/restauranfood.jpg';
import {Link} from 'react-router-dom';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="description">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <h4>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h4>
                    <Link to="/reservations" className="button"><h3>Reserve a table</h3></Link>
                </div>
                <div className="restaurant">
                    <img src={Restaurant} id="restaurant" alt="restaurant" />
                </div>
            </div>

        </section>
    )
}

export default Hero