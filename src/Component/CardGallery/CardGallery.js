
import './CardGallery.css'
const CardGallery = (props) => {
   const {fruit,HandleClicked}=props
 
   const {name,price,img}=fruit;
  //  console.log(props.fruit)
    return (
     <div className="card cardStyle" style={{width:"18rem"}}>
       <img src={img} className="card-img-top" alt="..."/>
       <div className="card-body">
           <h2 className="card-title card-content">{name}</h2>
           <h5 className="card-text card-content">Price:${price}</h5>
           <button onClick={()=>{HandleClicked(fruit)}} className='buttonCard'>Add to Cart</button>
       </div>
     </div>
    );
};

export default CardGallery;