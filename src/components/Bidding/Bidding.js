import React, { useState } from 'react';
import fakeData from '../../fakeData/Player.json';
import  './Bidding.css';
import Product from '../Player/Player';
import Cart from '../Cart/Cart';


const Shop = () => {
   
  const frst15 =fakeData.slice(0,15);
  
 const[player,setplayer]= useState(frst15);
 const [cart,setCart]=useState([]);


 const handleAddProduct =(props)=>{
     const newcart= [...cart,props];
     setCart(newcart);
    
 }
      return (
        <div className="shop-container">
        <div className="product">
        
               {
                
                   player.map(players=> <Product
            
                    handleAddProduct ={handleAddProduct}
                     player={players}></Product>)
               }
          
           </div>
           <div className="cart">
               <Cart cart={cart}  ></Cart>
               

           </div>


        </div>
    );
};

export default Shop;