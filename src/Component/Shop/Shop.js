
import { useEffect, useState } from 'react';
import CardGallery from '../CardGallery/CardGallery';
import ShopCart from '../ShopCart/ShopCart';

import './Shop.css'


const Shop = () => {
    const[fruits,setFruits]=useState([])
    useEffect(()=>{
        fetch('fruit.json')
        .then(res=>res.json())
        .then(data=>setFruits(data))
    },[])

    const [cart , setCart]=useState([])
    
        const HandleClicked=(fruit)=>{
        //   creating new array
            const newCart=[...cart,fruit];
            setCart(newCart);
    }
    // removing item
     const RemoveAll=()=>{
         setCart([])
     }

 
    return (
        <div className='componentGrid'>
            <div className='cardGrid'>
            
            {fruits.map(fruit=><CardGallery fruit={fruit} HandleClicked={HandleClicked} key={fruit.id}></CardGallery>)}
        </div>
        <div>
            <ShopCart RemoveAll={RemoveAll} cart={cart}></ShopCart>
        </div>
        </div>
        
    );
};

export default Shop;