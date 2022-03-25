
import { useEffect, useState } from 'react';
import CardGallery from '../CardGallery/CardGallery';
import ShopCart from '../ShopCart/ShopCart';

import './Shop.css'


const Shop = () => {
    // fake data creation 
    // const fruits=[
    //     {name:'Banana',    price:70,id:1,img:'img/banana.png'},
    //     {name:'Apple',     price:70,id:2,img:'img/apple.png'},
    //     {name:'Orange',    price:70,id:3,img:'img/orange.png'},
    //     {name:'Watermelon',price:70,id:4,img:'img/watermelon.png'},
    //     {name:'Lemon',     price:70,id:5,img:'img/lemon.png'},
    //     {name:'Strawberry',price:70,id:6,img:'img/strawberry.png'},
    //     {name:'Cherry',    price:70,id:7,img:'img/cherry.png'},
    //     {name:'Jackfruit', price:70,id:8,img:'img/jackfruit.png'},
    //     {name:'Mango',     price:70,id:9,img:'img/mango.png'}
    // ]
    const[fruits,setFruits]=useState([])
    useEffect(()=>{
        fetch('fruit.json')
        .then(res=>res.json())
        .then(data=>setFruits(data))
    },[])
    
    
    return (
        <div className='componentGrid'>
            <div className='cardGrid'>
            
            {fruits.map(fruit=><CardGallery fruit={fruit}></CardGallery>)}
        </div>
        <div>
            <ShopCart></ShopCart>
        </div>
        </div>
        
    );
};

export default Shop;