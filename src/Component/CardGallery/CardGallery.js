import React from 'react';
import './CardGallery.css'
const CardGallery = (props) => {
   const {name,price,img}=props.fruit;
   console.log(props.fruit)
    return (
     <div class="card cardStyle" style={{width:"18rem"}}>
       <img src={img} class="card-img-top" alt="..."/>
       <div class="card-body">
           <h2 class="card-title">{name}</h2>
           <h5 class="card-text">Price:${price}</h5>
           <button className='buttonCard'>Add to Cart</button>
       </div>
     </div>
    );
};

export default CardGallery;