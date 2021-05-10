import React from 'react';
import '../sass/Footer.scss';
import Logo from '../images/logo.png';
import {Link} from 'react-router-dom';

function footer() {
    return(
        <footer className = "footer">
            <div className = "footer-one container">
                <div className = "footer-caption col-12 col-sm-6 col-lg-3 ">
                    <img src ={Logo} alt = "Logo"/>
                    <p className = "ft-paragraph-title">
                        Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum
                    </p>
                    <a href = "tel:+994505110003" className = "phone-btn" rel="noreferrer" target ="_blank">994(50) 511 00 03</a>
                    <a href = "mailto:baxisli74@gmail.com" className = "mail-btn" rel="noreferrer" target = "_blank">baxisli74@gmail.com</a>
                    <div className = "social-media">
                        <a href = "#" className = "scm-btn" rel="noreferrer" target = "_blank">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href = "#" className = "scm-btn" rel="noreferrer" target = "_blank">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href = "#" className = "scm-btn" rel="noreferrer" target = "_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href = "#" className = "scm-btn" rel="noreferrer" target = "_blank">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </div>
                </div> 
                <div className = "footer-caption col-12 col-sm-6 col-lg-3 ">
                    <h4 className = "capt-title">
                        Navigation
                    </h4>
                    <Link to = '/' className = "ftr-capt-btn">Home</Link>
                    <Link to = '/' className = "ftr-capt-btn">About</Link>
                    <Link to = '/' className = "ftr-capt-btn">Services</Link>
                    <Link to = '/' className = "ftr-capt-btn">Blog</Link>
                    <Link to = '/' className = "ftr-capt-btn">Contact</Link>
                </div> 
                <div className = "footer-caption col-12 col-sm-6 col-lg-3 ">
                    <h4 className = "capt-title">
                        Services
                    </h4>
                    <Link to = '/' className = "ftr-capt-btn">Drone Mapping</Link>
                    <Link to = '/' className = "ftr-capt-btn">Real State</Link>
                    <Link to = '/' className = "ftr-capt-btn">Commercial</Link>
                    <Link to = '/' className = "ftr-capt-btn">Construction</Link>
                </div> 
                <div className = "footer-caption col-12 col-sm-6 col-lg-3 ">
                    <h4 className = "capt-title">
                        Subscribe newsletter
                    </h4>
                    <p className = "ft-paragraph-title">
                        Subscribe our newsletter to get updates about our services and offers.
                    </p>
                    <div className = "mail-form">
                        <input className = "mail-form-input" type = "text" placeholder="Email Address"/>
                        <button className = "mail-form-btn"><i class="bi bi-arrow-right"></i></button>
                    </div>
                </div> 
            </div>

            <div className = "footer-two d-flex justify-content-center"> 
                <p>Copyright ©2021 All rights reserved | This template is made with  by Colorlib & Baxisli Imran</p>
            </div>
        </footer>
    )
}

export default footer;