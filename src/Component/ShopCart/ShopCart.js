import React, { useState } from 'react';
import RandomCard from '../RandomCard/RandomCard';
import './ShopCart.css'
const ShopCart = (props) => {
//   console.log(props)
  const {cart,RemoveAll}=props;
  
  console.log(cart)
//  const ChooseOne=()=>{
//      return cart;
//  }
         
   
  
  
 
    return (
        <div className='ShopCartStyle'>
            <div className='shoppingList'>
            {cart.map(fruit=><h3 key={fruit.id}>{fruit.name}</h3>)}
           
            </div>

            <RandomCard cart={cart}></RandomCard>
           <button className='btn btn-outline-success' onClick={()=>{RemoveAll()}} >Remove all</button>
        </div>
    );
};

export default ShopCart;