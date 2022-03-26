import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './CardGallery.css'
const CardGallery = (props) => {
   const {fruit,HandleClicked}=props
 
   const {name,price,img}=fruit;
  //  console.log(props.fruit)
    return (
     <div className="card cardStyle" style={{width:"18rem"}}>
       <img src={img} className="card-img-top" alt="..."/>
       <div className="card-body ">
           <h4 className="card-title card-content ">{name}</h4>
           <h5 className="card-text card-content ">Price:${price}</h5>
           <button onClick={()=>{HandleClicked(fruit)}} className='buttonCard btn  btn-outline-success'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
       </div>
     </div>
    );
};

export default CardGallery;