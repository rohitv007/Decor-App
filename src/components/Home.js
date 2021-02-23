import React from 'react'
import Footer from './Footer'
import background from '../assets/home-bg.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BiRightArrow} from 'react-icons/bi'
import '../css/Home.css'
import { Helmet } from 'react-helmet'
import '../js/AOS'
import HomeCarousel from './HomeCarousel'
import HomeCarousel1 from './HomeCarousel1'

function Home() {
    return (
        <div className="home" id="top">

            <Helmet>
              <script src="../js/AOS.js" type="text/javascript" />
            </Helmet>

            <div className="container-fluid home__top" style={{width: "100%", backgroundImage: `url(${background})`, backgroundSize: "cover",backgroundRepeat: "no-repeat",backgroundPosition: "center center", height: "600px"}}>
                <span className='home__brand container-fluid'>
                    <p>Braj Decors <br/> and Decorators</p>
                    <h4>The Complete Interior and Exterior Junction</h4>
                </span>
            </div>
            <div className="container-fluid home__mid">
                <div className="container">
                    <div className="item" data-aos="fade-right"></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="mt-5 container services">
                    <div>
                        <h3>SERVICES</h3>
                    </div>
                    <div className='container button__list'>
                        <div className="row buttons">
                            <button type="button" className="btn col-auto mt-1 mb-1" data-toggle="modal" data-target="#styleModal">
                                Style Button
                            </button>
                            <button type="button" className="btn col-auto mt-1 mb-1" data-toggle="modal" data-target="#styleModal">
                                Style Button
                            </button>
                            <button type="button" className="btn col-auto mt-1 mb-1" data-toggle="modal" data-target="#styleModal">
                                Style Button
                            </button>
                            <button type="button" className="btn col-auto mt-1 mb-1" data-toggle="modal" data-target="#styleModal">
                                Style Button
                            </button>
                            <button type="button" className="btn col-auto mt-1 mb-1" data-toggle="modal" data-target="#styleModal">
                                Style Button
                            </button>
                        </div>
                        <div className="modal fade" id="styleModal" tabIndex="-1" role="dialog" aria-labelledby="styleModalTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 style={{color:'black', fontWeight:'bold'}} className="modal-title" id="exampleModalLongTitle">Services</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <HomeCarousel1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__bottom">
                <div className="parallax container-fluid">
                    <div className="container-fluid parallax-inner">
                        <p style={{fontWeight: '600', fontSize: '130%', color:'white'}}>Check out our Products.<br/> You might just find out what you need.</p>
                        <button className="btn">SHOP&nbsp;<BiRightArrow /></button>
                    </div>
                </div>
            </div>
            <div className="container-fluid home__carousel">
                <div>
                    <h4>TESTIMONIALS</h4>
                    <HomeCarousel />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
