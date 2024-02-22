import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from '../../context/globalContext';
import '../Item/Item.css';

const Item = ({product}) => {
  const {cart} = useCartContext()
  console.log("log checkout", cart);
  return (
    <div className='itemDiv'>
        <br></br>
        <br></br>
        <h3>{product.name}</h3>
        <i>{product.description}</i>
        <img src= {product.img} widht="400" height="200"/>
        <Link to={`/producto/${product.id}`}>Ver detalles</Link>                
    </div>
  )
}

export default Item