import Photo1 from '../assets/Mario and Adrian A.jpg';
import Photo2 from '../assets/Mario and Adrian b.jpg';
import Photo3 from '../assets/restaurant chef B.jpg';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function About() {
    const images = [
        {src: Photo1, alt: "photo1"},
        {src: Photo2, alt: "photo2"},
        {src: Photo3, alt: "photo3"},
    ];

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    return (
        <section className="about">
            <div className="about-container">
                <div className="text">
                    <p>
                    <h2>Welcome to Little Lemon Restaurant,</h2>
                    where culinary excellence meets cozy ambiance. Nestled in the heart of Chicago, our restaurant is more than just a dining destination -
                    <h3>it's an experience crafted with passion, creativity, and a zest for flavor.</h3>
                    </p>
                    <p>
                    Come taste the difference at Little Lemon Restaurant, where every meal is a celebration of flavor, community, and the joy of good food!
                    </p>
                </div>
                <div className="embla" ref={emblaRef}>
                    <div className="embla-container">
                        {
                            images.map(image => {
                                return (
                                    <div className="embla-slide">
                                        <img src={image.src} alt={image.alt} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About