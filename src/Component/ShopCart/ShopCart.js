import React, { useState } from 'react';
import RandomCard from '../RandomCard/RandomCard';
import './ShopCart.css'
const ShopCart = (props) => {
//   console.log(props)
  const {cart}=props;
  
  console.log(cart)
//  const ChooseOne=()=>{
//      return cart;
//  }
         
   
  
  
 
    return (
        <div className='ShopCartStyle'>
            {cart.map(fruit=><h3 key={fruit.id}>{fruit.name}</h3>)}
            {/* <button onClick={()=>ChooseOne()} >Choose One</button> */}

            <RandomCard cart={cart}></RandomCard>
           
        </div>
    );
};

export default ShopCart;