import { Link } from "react-router-dom"

function BookingConfirm() {
    return (
        <div className="booking">
            <div className="booking-container">
                <h2>Reservation confirmed!</h2>
                <h4>Please check your email with the reservation details.</h4>
                <h4>See you soon!</h4>
                <Link to="/" className="nav-item"><h3>Back to Homepage</h3></Link>
            </div>
        </div>
    )
}

export default BookingConfirm