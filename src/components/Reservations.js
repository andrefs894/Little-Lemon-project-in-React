import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { schema } from "../schemas";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reservations({ availableTimes, updateTimes, submitForm }) {
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            date: "",
            time: "17:00",
            guests: "1",
            occasion: "Birthday"
        },
        onSubmit: async (values, actions) => {
            const success = await submitForm(values);
            if (success) {
                actions.resetForm();
                navigate("/reservations/confirmed");
            }
        },
        validationSchema: schema
    })

    const today = new Date().toISOString().split('T')[0];

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        formik.setFieldValue(name, value);
        updateTimes(value);
      };

    return (
        <section className="reservations">
            <div className="reservations-container">
                <h2>Make your reservation here:</h2>
                <form className="reservations-form" onSubmit={formik.handleSubmit} noValidate>
                    <label htmlFor="name"><h4>Name: </h4></label>
                    {formik.errors.name && formik.touched.name && <p className="error">{formik.errors.name}</p>}
                    <input
                        type="text"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    <label htmlFor="email"><h4>E-mail: </h4></label>
                    {formik.errors.email && formik.touched.email && <p className="error">{formik.errors.email}</p>}
                    <input
                        type="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    <label htmlFor="date"><h4>Choose date: </h4></label>
                    {formik.errors.date && formik.touched.date && <p className="error">{formik.errors.date}</p>}
                    <input
                        type="date"
                        min={today}
                        id="date"
                        name="date"
                        value={formik.values.date}
                        onChange={handleDateChange}
                        onBlur={formik.handleBlur}
                        onKeyDown={(e) => e.preventDefault()}
                    />
                    {
                        formik.values.date !== "" &&
                        <>
                            <label htmlFor="time"><h4>Choose time: </h4></label>
                            <select
                                id="time"
                                value={formik.values.time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}>
                                {
                                    availableTimes.map((time,index) => {
                                        return time.isFree
                                            ? <option key={index}>{time.hour}</option>
                                            : <option key={index} disabled>{time.hour} - Booked</option>
                                    })
                                }
                            </select>
                            <label htmlFor="guests"><h4>Number of guests: </h4></label>
                            {formik.errors.guests && formik.touched.guests && <p className="error">{formik.errors.guests}</p>}
                            <input
                                type="number"
                                min="1"
                                max="10"
                                id="guests"
                                value={formik.values.guests}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            <label htmlFor="occasion"><h4>Occasion: </h4></label>
                            <select
                                id="occasion"
                                value={formik.values.occasion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Ceremony</option>
                            </select>
                        </>
                    }
                    <button className="button" type="submit"><h3>Confirm reservation</h3></button>
                    <ToastContainer />
                </form>
            </div>
        </section>
    )
}

export default Reservations