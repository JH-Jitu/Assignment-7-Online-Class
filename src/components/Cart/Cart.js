import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce( (total, productInform) => total + productInform.price, 0)
    return (
        <div>
            <div className="card" style={{width: "18 rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Current Courses</h5>
                    <p className="card-text">Courses purchased: {cart.length}</p>
                    <p className="card-text">Total Amount: {total.toFixed(2)}</p>
                  
                </div>
            </div> 
        </div>
    
    );
};

export default Cart;