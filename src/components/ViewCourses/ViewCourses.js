import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './ViewCourses.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart'

const ViewCourses = () => {
    const first12 = fakeData.slice(0, 12);
    const [courses, setCourses] = useState(first12);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="d-flex bd-highlight justify-content-between justify-content-sm-center row-sm-12">
           <div className="p-2 w-100 bd-highlight flex-sm-{grow|shrink}-1 flex-{grow|shrink}-0 courses-container col-sm-8">
                <ul>
                    {
                        courses.map(courseValue => <Course 
                            handleAddCourse = {handleAddCourse}
                            course = {courseValue}  key={courseValue.key}></Course>)
                    }
                </ul>
           </div>
           <div className="p-2 flex-shrink-1 bd-highlight flex-sm-{grow|shrink}-1 flex-{grow|shrink}-1 cart-container col-sm-4">
                        <Cart cart = {cart}></Cart>
            </div> 
        </div>
    );
};

export default ViewCourses;