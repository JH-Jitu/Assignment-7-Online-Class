import React from 'react';
import logo from "../../images/logo.png"
import './Header.css'
const header = () => {
    return (   
      <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="https://www.facebook.com/groups/989326168171713">INVENTIONOLOGIES</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/continue">Current Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pricing">Pricing</a>
          </li>
        </ul>
        <span className="navbar-text">
          <img src={logo} alt=""/>
        </span>
      </div>
    </nav>
    );
};

export default header;