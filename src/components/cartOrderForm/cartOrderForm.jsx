import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useCartContext } from '../../context/globalContext';
import './cartOrderForm.css';
import { db } from '../../services/firebaseConfig';
import { collection, doc, addDoc } from 'firebase/firestore';

const CartOrderForm = () => {
  const {cart} = useCartContext()
  const {setCart} = useCartContext()
  const {setItemsTotal} = useCartContext()
  const [userName, setName] = useState("");
  const [userPhone, setPhone] = useState("");
  const [userMail, setMail] = useState("");
  const [compra, setCompra] = useState({});
  const [total, setTotal] = useState(0);
  const navigate = useNavigate()
  
  const renderProducts = () => {
    console.log("carrito", cart);
    return cart.map((product, index) => (
      <ItemCartOrder key={index} product={product} />
    ));
  };  
  const confirmOrder = async (e)=>{
    e.preventDefault();
    const mappedCart = cart.map((product)=>({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      totalAlbum: (product.price * product.quantity)      
    }));

    setCompra({...compra, ...mappedCart});

    const compraTotal = Object.values(compra).reduce((acc, item) => acc + item.totalAlbum, 0);
    setTotal(compraTotal);

    try {
      const ordenCarrito = await addDoc(collection(db, "orders"),{
        userName: userName,
        userPhone: userPhone,
        userMail: userMail,
        compra: {...compra},
        totalCompra: compraTotal
      });
      console.log("orden registrada con ID: ", ordenCarrito.id);
      setName("");
      setPhone("");
      setMail("");
      setCompra({});
      setTotal(0);
      setCart([]);
      setItemsTotal(0);
      navigate('/')
    } catch (err){
      console.error("Error al confirmar la orden: " + ordenCarrito.id + "" , err);
    }
  }  
    
  return(
    <>
    <div>
    {renderProducts()}
        <h2>Si desea confirmar la compra, ingrese los siguientes datos</h2>
        <form onSubmit={confirmOrder} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <label style={{ marginBottom: '10px' }} >Nombre:
                <input
                  type='text'
                  value={userName}
                  onChange={(e) => setName(e.target.value)}
                  style={{ marginLeft: '10px', padding: '5px' }}
                  required
                />                 
            </label>
            <label style={{ marginBottom: '10px' }} >Telefono:
                <input
                  type='text'
                  value={userPhone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ marginLeft: '10px', padding: '5px' }}
                  required
                  />                 
            </label>
            <label style={{ marginBottom: '10px' }} >Mail:
                <input
                  type='text'
                  value={userMail}
                  onChange={(e) => setMail(e.target.value)}
                  style={{ marginLeft: '10px', padding: '5px' }}
                  required
                  />                 
            </label>
            <button type="submit">Confirmar Orden</button>
        </form>
    </div>
    </>
  )
}
  const ItemCartOrder = ({product}) => {
    return (
    <div className='itemDiv' >
      <br></br>
      <h3>Disco: {product.name}</h3>
      <h3>Cantidad: {product.quantity}</h3>
      <img src= {product.img} widht="400" height="200"/>
    </div>
    );
  }    
  
export default CartOrderForm