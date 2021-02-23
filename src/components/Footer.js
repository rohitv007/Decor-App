import React from 'react'
import '../css/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BiUpArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer container-fluid'>
            <div className="row footer__top">
                <div className='footer__left col-sm-4 col-12'>
                    <ul className='footer__list'>
                        <li>Products</li>
                        <li><Link to="/">Living Room</Link></li>
                        <li><Link to="/">Bedroom</Link></li>
                        <li><Link to="/">Drawing Room</Link></li>
                    </ul>
                </div>
                <div className='footer__mid col-sm-4 col-12'>
                    <ul className='footer__list'>
                        <li>Contact</li>
                        <li><a href="https://www.google.com/maps/@24.3368027,78.0002241,4.59z" target="_blank" rel="noreferrer">175 ABC Street, XYZ Road, India</a></li>
                        <li><a href="tel:1234657890">+(123)456-7890</a></li>
                        <li><a href="tel:1234657890">+(123)456-7890</a></li>
                    </ul>
                </div>
                <div className='footer__right col-sm-4 col-12'>
                    <ul className='footer__list'>
                        <li>Navigate</li>
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container footer__bottom">
                <ul className='media__icons'>
                    <li><a target="_blank" rel="noreferrer" style={{color: '#3B5998'}} href={'https://www.facebook.com/'}><FaFacebookF /></a></li>
                    <li><a target="_blank" rel="noreferrer" style={{color: '#C13584'}} href={'https://www.instagram.com/'}><FaInstagram /></a></li>
                    <li><a target="_blank" rel="noreferrer" style={{color: '#BB001B'}} href={'https://www.google.com/intl/en-GB/gmail/about/#'}><SiGmail /></a></li>
                    <li><a target="_blank" rel="noreferrer" style={{color: '#008000'}} href={'https://api.whatsapp.com/send?phone=+15555551212'}><FaWhatsapp /></a></li>
                    <li><a target="_blank" rel="noreferrer" style={{color: '#25D400'}} href={'tel:+15555551212'}><FaPhoneAlt /></a></li>
                </ul>
            </div>
            <div className="top">
                <a href="#top" data-toggle="tooltip" title="Back to Top"><BiUpArrow /></a>
            </div>
            <div className="copyright mt-5">
                <p>&copy; 2020 Braj Decor and Designer</p>
            </div>
        </div>
    )
}

export default Footer
