import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="about-page">
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">About Us</h1>
                        <p className="lead text-body-secondary">Learn more about our social media app and its features.</p>
                        <p>
                            <Link to="/contact" className="btn btn-primary my-2">Contact Us</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;

