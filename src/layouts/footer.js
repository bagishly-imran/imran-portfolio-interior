import React from 'react';
import '../sass/Footer.scss';
import Logo from '../images/logo.png';
import {Link} from 'react-router-dom';

const footer = () => {
    return(
        <footer className = "footer">
            <div className = "footer-one container">
                <div className = "footer-caption col-12 col-sm-6 col-lg-3 ">
                    <img src ={Logo} alt = "Logo"/>
                    <p className = "ft-paragraph-title">
                        Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum
                    </p>
                    <Link to = "tel:+994505110003" className = "phone-btn" aria-label="Phone" rel="noreferrer" target ="_blank">994(50) 511 00 03</Link>
                    <Link to = "mailto:baxisli74@gmail.com" className = "mail-btn" aria-label="E-Mail" rel="noreferrer" target = "_blank">baxisli74@gmail.com</Link>
                    <div className = "social-media">
                        <Link to = 'https://www.instagram.com/imrn.bl/' aria-label="Instagram" className = "scm-btn" rel="noreferrer" target = "_blank">
                            <i className="bi bi-instagram"></i>
                        </Link>
                        <Link to = 'https://www.facebook.com/imos11/' aria-label="Facebook" className = "scm-btn" rel="noreferrer" target = "_blank">
                            <i className="bi bi-facebook"></i>
                        </Link>
                        <Link to = 'https://www.linkedin.com/in/imran22/' aria-label="Linkedin" className = "scm-btn" rel="noreferrer" target = "_blank">
                            <i className="bi bi-linkedin"></i>
                        </Link>
                        <Link to = '#' aria-label="Youtube" className = "scm-btn" rel="noreferrer" target = "_blank">
                            <i className="bi bi-youtube"></i>
                        </Link>
                    </div>
                </div> 
                <div className = "footer-caption col-12 col-sm-6 col-lg-3 ">
                    <h1 className = "capt-title">
                        Navigation
                    </h1>
                    <Link to = '/interior.io' className = "ftr-capt-btn">Home</Link>
                    <Link to = '/interior.io' className = "ftr-capt-btn">About</Link>
                    <Link to = '/interior.io' className = "ftr-capt-btn">Services</Link>
                    <Link to = '/interior.io' className = "ftr-capt-btn">Blog</Link>
                    <Link to = '/interior.io' className = "ftr-capt-btn">Contact</Link>
                </div> 
                <div className = "footer-caption col-12 col-sm-6 col-lg-3 ">
                    <h1 className = "capt-title">
                        Services
                    </h1>
                    <Link to = '/interior.io' className = "ftr-capt-btn">Drone Mapping</Link>
                    <Link to = '/interior.io' className = "ftr-capt-btn">Real State</Link>
                    <Link to = '/interior.io' className = "ftr-capt-btn">Commercial</Link>
                    <Link to = '/interior.io' className = "ftr-capt-btn">Construction</Link>
                </div> 
                <div className = "footer-caption col-12 col-sm-6 col-lg-3 ">
                    <h1 className = "capt-title">
                        Subscribe newsletter
                    </h1>
                    <p className = "ft-paragraph-title">
                        Subscribe our newsletter to get updates about our services and offers.
                    </p>
                    <div className = "mail-form">
                        <input className = "mail-form-input" type = "text" placeholder="Email Address"/>
                        <button className = "mail-form-btn" aria-label = "Send For Mail"><i className="bi bi-arrow-right"></i></button>
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