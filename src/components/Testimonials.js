import TestimonialsCard from "./TestimonialsCard"
import Person1 from '../assets/person1.jpg';
import Person2 from '../assets/person2.jpg';
import Person3 from '../assets/person3.jpg'

function Testimonials() {
    const cards = [
        {
            img: Person1,
            description: "Nestled in the heart of the city, Little Lemon is a hidden gem waiting to be discovered. From the moment you step inside, you're greeted with an inviting atmosphere and friendly staff. The menu offers a delightful fusion of flavors, with each dish expertly crafted to perfection.",
            author: "Joe Hernandez"
        },
        {
            img: Person2,
            description: "As a frequent visitor to various restaurants in town, I must say that Little Lemon has truly won my heart. The diverse menu offers something for everyone, from mouthwatering steaks to delightful vegetarian options. What truly sets this place apart is the cozy ambiance and attentive staff.",
            author: "Sarah Johnson"
        },
        {
            img: Person3,
            description: "My recent dining experience at Little Lemon left me thoroughly impressed. From the moment I walked in, the attentive staff made me feel like a valued guest. The menu boasts a delightful array of dishes, each bursting with exquisite flavors and fresh ingredients.",
            author: "David Lee"
        },
    ]
    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-title">
                    <h2>Check what people are saying about us!</h2>
                </div>
                <div className="testimonials-cards">
                    <TestimonialsCard card={cards[0]} />
                    <TestimonialsCard card={cards[1]} />
                    <TestimonialsCard card={cards[2]} />
                </div>
            </div>
        </section>
    )
}

export default Testimonials