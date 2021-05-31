import React from 'react'
import "../css/Nav.css"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { RiContactsLine, RiHome2Line, RiInformationLine } from 'react-icons/ri'

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand mb-0" to="/">BRAJ</Link>
                <div className="nav__btns">
                    <Link to="/login" title="Login / Sign Up"><button id='btnlogin' className="btn btn-sm" type="button"><AiOutlineUserAdd style={{color: "goldenrod"}} size='1.8em'/></button></Link>
                </div>
                <button className="btn-sm ml-auto navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span style={{ color: 'goldenrod'}}>&#9776;</span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-auto"> 
                            <Link className="nav-link" to="/"><RiHome2Line /><br /> Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mx-auto">
                            <Link className="nav-link" to="/about"><RiInformationLine /><br /> About</Link>
                        </li>
                        <li className="nav-item mx-auto">
                            <Link className="nav-link" to="/contact" tabIndex={-1} aria-disabled="true"><RiContactsLine /><br /> Contact</Link>
                        </li>
                    </ul>
                    <form className="searchBar form-group form-inline ml-auto">
                        <div>
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        </div>
                        <div>
                            <button className="btn ml-auto" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Nav
