import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Course = (props) => {
    // console.log(props)
    const {name, img, seller, price} = props.course;
    return (
        <div className="row d-flex bd-highlight course card-deck">
            <div className="card col-md-5">
                <img src={img} alt=""/>
            </div>
            <div className="card col-md-7">
                <h5>{name}</h5>
                <p><small>Instructor: {seller}</small></p>               
                <h5>${price}</h5> <br/>
                <button onClick={() => props.handleAddCourse(props.course)} type="button" className="btn btn-warning"><FontAwesomeIcon icon={faShoppingCart}/> Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;