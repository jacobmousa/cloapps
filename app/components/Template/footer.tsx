import Link from 'next/link';
import NewsletterSubscribe from './NewsletterSubscribe';

export default function Footer() {
    return(
        <footer className="bg-dark" id="cloapps_footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                    CloApps
                    </h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            Shfaram, Wadi al-Malak 6
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw"></i>
                            <a className="text-decoration-none" href="tel:010-020-0340">
                                972-52-5759236
                            </a>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <a className="text-decoration-none" href="mailto:info@cloapps.com">
                                info@cloapps.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                        <ul className="list-unstyled">
                        <li><Link className="text-decoration-none" href="/products#starter-website">Starter Website</Link></li>
                        <li><Link className="text-decoration-none" href="/products#ecommerce">E‑commerce Store (Bagisto)</Link></li>
                        <li><Link className="text-decoration-none" href="/products#booking-app">Booking & Appointment</Link></li>
                        </ul>
                        
                        
                </div>

                <div className="col-md-4 pt-5">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li><Link className="text-decoration-none" href="/services#web-app">Web Application</Link></li>
                        <li><a className="text-decoration-none" href="/services#mobile-app">Mobile App</a></li>
                        <li><a className="text-decoration-none" href="/contactus">Contact us</a></li>
                    </ul>
                </div>

            </div>

            <div className="row text-light mb-4">
                <div className="col-12 mb-3">
                    <div className="w-100 my-3 border-top border-light"></div>
                </div>
                <div className="col-auto me-auto">
                    <ul className="list-inline text-left footer-icons">
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a rel="nofollow" className="text-light text-decoration-none" href="#"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" href="#"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none"href="#"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                        <li className="list-inline-item border border-light rounded-circle text-center">
                            <a className="text-light text-decoration-none" href="#"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="col-auto">

                    <NewsletterSubscribe />
                    {/*<!--
                    <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
                    <div className="input-group mb-2">
                        <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                        <div className="input-group-text btn-success text-light">Subscribe</div>
                    </div>
                    -->*/}
                </div>
            </div>
        </div>

        <div className="w-100 bg-black py-3">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-12">
                        <p className="text-left text-light">
                            Copyright © 2024-2025 CloApps.com
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    )
}