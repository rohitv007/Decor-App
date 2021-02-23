import React, { createRef } from 'react'
import Footer from './Footer'
import "../css/Contact.css"
import background from '../assets/contact-bg.jpg'
// import Cookies from 'js-cookie'

function Contact() {

    var fname = createRef(null);
    var email = createRef(null);
    var cell = createRef(null);

    React.useEffect(() => {

        let infoCookie = document.cookie
        .split(';')                                                     // splitting into an array of objects(cookie with key-value pair)
        .map(cookie => cookie.split('='))                               // array inside an array with each array containing [key,value]
        .reduce(( arrObj, [key, value] ) =>                             // to reduce this array into an object with prop. as cookie-name and value of prop. as cookie-value
        ({ ...arrObj, [key.trim()]: decodeURIComponent(value) }), {});

        console.log(infoCookie);

        // let fname = document.getElementById("fullname");
        // let email = document.getElementById("email");
        // let cell = document.getElementById("cell");

        if (infoCookie) {
            fname.current.value = infoCookie.name;
            email.current.value = infoCookie.email;
            cell.current.value = infoCookie.mobile; 
        }
        else {
            fname.value = "";
            email.value = "";
            cell.value = "";
        }
    });

    return (
        <div className="contact">
            <div className="contact__bg container-fluid" style={{width: "100%", backgroundImage: `url(${background})`, backgroundSize: "cover",backgroundRepeat: "no-repeat",backgroundPosition: "center center", height: "600px"}}></div>
            <div className="contact__content">
                <div className="container contact__content1 mt-4">
                    <h5>Braj Interior &amp; Exterior Designer</h5>
                    <p>Office : +(123)456-7890</p>
                    <p>Email : brajdnd10@gmail.com</p>
                    <h6>Working Hours</h6>
                    <p>Monday - Saturday : 9:00-5:00</p>
                </div>
                <div className="container contact__content2 mt-5">
                    <h4>Work with Braj!</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="container-fluid contact__bottom">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 contact-form">
                        <form className="container-fluid">                            
                            <div className="form-group">
                                <input ref={fname} type="text" className="form-control" id="fullname" placeholder="Name" />
                            </div>
                            <div className="form-group form-row">
                                <div className="col-4 col-sm-3">
                                    <input type="text" className="form-control" placeholder="+91" readOnly />
                                </div>
                                <div className="col-8 col-sm-9">
                                    <input ref={cell} type="tel" className="form-control" id="cell" placeholder="Mobile" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input ref={email} type="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="work" placeholder="Approx Work Area" />
                            </div>
                            <div className="form-group">
                                <input type="text" onFocus = {e => e.target.type = 'date'} onBlur = {e => e.target.type = 'text'} className="form-control" id="DOB" placeholder="Date Of Birth" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="user-msg" rows="3" placeholder="Any message..."></textarea>
                            </div>
                            <div className="submit">
                                <button type="submit" className="btn btn-success mt-3 mb-0">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 contact-map">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596429.689401722!2d74.7454972224604!3d28.324414006660007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce19466e19ae1%3A0x45ceeb565fd5de6c!2sNational%20Capital%20Region!5e0!3m2!1sen!2sin!4v1611326023402!5m2!1sen!2sin" allowFullScreen="" aria-hidden="false" tabIndex="0" width="100%" height="100%"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact