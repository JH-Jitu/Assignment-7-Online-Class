import React from 'react';
import logo from "../../images/logo.png"
import './Header.css'
const header = () => {
    return (   
        <div className="navbar navbar-expand-lg navbar-dark">            
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="https://www.facebook.com/groups/989326168171713">INVENTIONOLOGIES.com</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/continue">Running Course</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/certificate">Certificate</a>
            </li>
          </ul>
          <div className="logoImg form-inline my-2 my-lg-0">
          <img src={logo} alt=""/>
          </div>
        </div>
      </div>
    );
};

export default header;