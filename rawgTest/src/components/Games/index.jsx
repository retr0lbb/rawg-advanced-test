//importa o css para o elemento react
import './index.css'

//importa alguns icones para os botões
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

//vai esportar uma função na qual acitara elementos de propriedade editaveis do react
export default (props) => {
    return(
    <div className="wrapper">
        <div className="header">

            {/* retorna uma img com o elemento src tendo uma propriedade externa caso não tenha usara uma imagem aleatoria(ainda nao fiz a imagem aleatoria) */}
        <img src={props.src || 'none'}/>

        </div>
        <h1>{props.title}</h1>

        <div className='buttons'>
            {/* botoes com icones em react podendo alterar cor e tamanho */}
            <button><AiOutlineShoppingCart size={20} color='#fff'></AiOutlineShoppingCart></button>
            <button><AiFillHeart size={20} color='#fff'></AiFillHeart></button>
        </div>
    </div>
    )
}