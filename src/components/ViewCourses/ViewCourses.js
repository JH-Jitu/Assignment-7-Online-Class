import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './ViewCourses.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart'

const ViewCourses = () => {
    const first13 = fakeData.slice(0, 13);
    const [courses, setCourses] = useState(first13);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="d-flex justify-content-around">
           <div className="courses-container col-md-9 mx-auto">
                <ul>
                    {
                        courses.map(courseValue => <Course 
                            handleAddCourse = {handleAddCourse}
                            course = {courseValue}></Course>)
                    }
                </ul>
           </div>
           <div className="cart-container col-md-3 mx-auto">
                        <Cart cart = {cart}></Cart>
            </div> 
        </div>
    );
};

export default ViewCourses;