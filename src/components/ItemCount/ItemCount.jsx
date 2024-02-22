import React from 'react'
import { useCartContext } from '../../context/globalContext';
import CartOrderForm from '../cartOrderForm/cartOrderForm';

const ItemCount = () => {
    const {cart} = useCartContext()

    //const orderCart =  cart.map((elemento) => {
        //return <CartOrderForm key = {elemento.id} product ={elemento}/>
      //})

      return (
        <div>
          <h2>Checkout</h2>
          <br></br>        
          <ul>
          <CartOrderForm products ={cart}/>
          </ul>
        </div>
      );
}

export default ItemCount