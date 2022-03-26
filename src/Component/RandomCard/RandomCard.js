import React, { useState } from 'react';

const RandomCard = (props) => {
  const [z,setZ]=useState([''])
    const {cart}=props;
   const num=cart.length;
   let random;
//    const random =Math.floor(Math.random()*num)
   const chose=()=>{
    random =Math.floor(Math.random()*num)
    setZ(cart[random].name)
   }
   console.log(z)
//    setZ([cart[random]])
//    console.log(cart[random].name)
    
    
    return (
        <div>
            <button onClick={()=>chose()}>choose</button>
            <h1>name:{z}</h1>
        </div>
    );
};

export default RandomCard;