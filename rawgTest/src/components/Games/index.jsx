import './index.css'
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

export default (props) => {
    return(
    <div className="wrapper">
        <div className="header">
        <img src={props.src}/>

        </div>
        <h1>{props.title}</h1>

        <div className='buttons'>
            <button><AiOutlineShoppingCart size={20} color='#fff'></AiOutlineShoppingCart></button>
            <button><AiFillHeart size={20} color='#fff'></AiFillHeart></button>
        </div>
    </div>
    )
}