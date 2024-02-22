import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import { useCartContext } from '../../context/globalContext';


export const ItemDetail = ({producto}) => {
    const [counter, setCounter] = useState(1)
    const [addedProduct, setAddedProduct] = useState([])
    const {addItem} = useCartContext()


    const handleAdd = () => {
      if (counter < producto.stock) {
        setCounter(counter + 1);
      }
    };
    
    const handleSubstract = () =>{
      if (counter > 1) {
        setCounter(counter - 1);
      }
    }

    const handleAddToCart = () => {
        setAddedProduct({...producto, cantidad:counter})
        addItem(producto, counter)
        setCounter(1);
      }
      
      useEffect(() => {
        console.log("addedProduct ",addedProduct);
    }, [addedProduct]);

  return (
    <>
    {producto&&
    <>
    <div>{producto.name}</div>
    <div>Precio: ${producto.price}</div>
    <div>Stock disponible: {producto.stock}</div>
    <img src= {producto.img} width="200" height="200"/>
    <div>cantidad: {counter}</div>
    <Button label='-' callback={handleSubstract} />
    <Button label='agregar al carrito' callback={handleAddToCart}/>
    <Button label='+' callback={handleAdd} />
    </>
    }
    </>
  )
}

export default ItemDetail