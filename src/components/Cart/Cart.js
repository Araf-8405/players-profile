import React from 'react';
import './cart.css'
const Cart = (props) => {
    
const cart=props.cart;
const name=cart.reduce((name,ply)=> name+" "+ ply.first_name,0);

const price=cart.reduce((price,prc)=> price + prc.salary,0);


    return (
        <div className="cartpro"> 
            <h3>Booked summery</h3>
            <h5>Booked players : {cart.length}</h5>
            <p>booked player :{name}  </p>
            <p>Total salary :$ {price} </p>

        </div>
    );
};

export default Cart;