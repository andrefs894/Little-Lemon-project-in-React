import { useEffect, useState } from "react"
import BookingSlots from "./BookingSlots";

function Reservations({ availableTimes, dispatch }) {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: ""
    })

    const resetForm = () => {
        setFormData({
            date: "",
            time: "",
            guests: "",
            occasion: ""
        })
    }

    useEffect(() => {
        fetch(`https://localhost:5000/reservations?date=${formData.date}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.length > 0) {
                    dispatch({
                        type: 'initialize',
                        payload: json
                    })
                }
            })
            .catch((error) => console.log(error));
    },[formData.date])

    const today = new Date().toISOString().split('T')[0];

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          [id]: value
        });
    }
//GO FROM HERE -> FIX UPDATE DISPATCH -> TRY USEEFFECT TO FETCH POST IN MAIN COMPONENT
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'update',
            payload: {
                date: formData.date,
                hour: formData.time,
            }
        })
        resetForm();
    };

    return (
        <section className="reservations">
            <div className="reservations-container">
                <h2>Make your reservation here:</h2>
                <form className="reservations-form" onSubmit={handleSubmit}>
                    <label htmlFor="date"><h4>Choose date: </h4></label>
                    <input
                        type="date"
                        min={today}
                        id="date"
                        value={formData.date}
                        onChange={handleChange} />
                    <label htmlFor="time"><h4>Choose time: </h4></label>
                    <select
                        id="time"
                        value={formData.time}
                        onChange={handleChange}>
                        <BookingSlots availableTimes={availableTimes} />

                    </select>
                    <label htmlFor="guests"><h4>Number of guests: </h4></label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={formData.guests}
                        onChange={handleChange} />
                    <label htmlFor="occasion"><h4>Occasion: </h4></label>
                    <select
                        id="occasion"
                        value={formData.occasion}
                        onChange={handleChange}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <button className="button" type="submit"><h3>Check availability</h3></button>
                </form>
            </div>
        </section>
    )
}

export default Reservations