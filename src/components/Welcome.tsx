import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Welcome</h1>
                        <p className="lead text-body-secondary">
                            Here you can register, unless you don't have an account or you can just simply log in.
                        </p>
                        <p>
                            <Link to="/register" className="btn btn-primary my-2">
                                Register
                            </Link>
                            <Link to="/login" className="btn btn-secondary my-2">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Welcome;
