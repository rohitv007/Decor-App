import React from 'react'
import Footer from './Footer'
import "../css/About.css"
import background from '../assets/about-bg.jpg'
import { Helmet } from 'react-helmet'
import '../js/AOS'

function About() {
    return (
        <div className="about">

            <Helmet>
              <script src="../js/AOS.js" type="text/javascript" />
            </Helmet>

            <div className="about__bg container-fluid" style={{width: "100%", backgroundImage: `url(${background})`, backgroundSize: "cover",backgroundRepeat: "no-repeat",backgroundPosition: "center center", height: "410px"}}></div>
            <div className="about__content">
                <div className="container about__content1 mt-5">
                    <h2>Our Story</h2>
                    <p>    
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="container about__content2 mt-4">
                    <h2>Our Team</h2>
                </div>
                <div className="container about__cards">
                    <div className="row row1">
                        <div data-aos="fade-down" className="col-12 col-sm-5 card mb-2">
                            <img className="card-img-top" src="https://imgpile.com/images/bb1ed2f3352508be3e9bd1c114fe10b0.jpg" alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">ABC</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="col-12 col-sm-5 card mb-2">
                            <img className="card-img-top" src="https://wallpapercave.com/wp/wp3049327.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">XYZ</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> 
                            </div>
                        </div>
                    </div> 
                    <div className="row row2">
                        <div data-aos="fade-down" className="col-12 col-sm-5 card mb-2">
                            <img className="card-img-top" src="https://imgpile.com/images/bb1ed2f3352508be3e9bd1c114fe10b0.jpg" alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">N1</h4>
                                <p className="card-text">Name : N1 <br />Description : Developer</p>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="col-12 col-sm-5 card mb-2">
                            <img className="card-img-top" src="https://wallpapercave.com/wp/wp3049327.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">N2</h4>
                                <p className="card-text">Name : N2 <br />Description : Developer</p> 
                            </div>
                        </div>
                    </div>  
                    <div className="row row3">
                        <div data-aos="fade-down" className="col-12 col-sm-5 card mb-2">
                            <img className="card-img-top" src="https://imgpile.com/images/bb1ed2f3352508be3e9bd1c114fe10b0.jpg" alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">N3</h4>
                                <p className="card-text">Name : N3 <br />Description : Developer</p>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="col-12 col-sm-5 card mb-2">
                            <img className="card-img-top" src="https://wallpapercave.com/wp/wp3049327.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">N4</h4>
                                <p className="card-text">Name : N4 <br />Description : Developer</p> 
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
