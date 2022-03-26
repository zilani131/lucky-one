import React, { useState } from 'react';

const RandomCard = (props) => {
  const [z,setZ]=useState([{}])
    const {cart}=props;
   const num=cart.length;
   let random;
//    const random =Math.floor(Math.random()*num)
   const chose=()=>{
    random =Math.floor(Math.random()*num)
    setZ(cart[random])
   }
   console.log(z)
//    setZ([cart[random]])
//    console.log(cart[random].name)
    
    
    return (
        <div style={{marginBottom:'10px'}}>
           
            <div><img style={{width:'50%'}} src={z.img} alt="" /></div>
            <h4>{z.name}</h4>
            <button className='btn  btn-outline-success' onClick={()=>chose()}>Select 1</button>
        </div>
    );
};

export default RandomCard;