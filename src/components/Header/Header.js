import React from 'react';

import Bidding from '../Bidding/Bidding';
import  './Header.css';



const Header = () => {
   
    return (
        <div className="header">
          
       <h1>choose your player!</h1>
      
       
        <Bidding></Bidding>
           
        </div>

       
    );
};

export default Header;