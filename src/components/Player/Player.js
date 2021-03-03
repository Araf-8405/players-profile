import React from 'react';
import './Player.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    
    const {first_name,image,salary}=props.player;

    return (
        
        <div className="item">
            <div>

            <img src={image} alt=""/>
            </div>

            <div className="details">
            <h4 className="name"> {first_name}</h4>
            <br/>
            <p>salary: $ {salary} </p>
            
            {<button className="btn"
            onClick= {()=>props.handleAddProduct(props.player)}>
                add to book</button>}
        </div>
        </div>
    );
};

export default Product;