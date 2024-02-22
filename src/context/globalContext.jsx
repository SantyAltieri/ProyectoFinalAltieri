import { createContext, useContext, useEffect, useState } from 'react';

const cartContext = createContext()

const { Provider } = cartContext 
export const useCartContext = () => useContext(cartContext)

const CartProvider = ({children}) => {
  const [cart, setCart] = useState ([])
  const [ itemsTotal, setItemsTotal ] = useState(0)
  const [ total, setTotal ] = useState(0)
  useEffect(() => {
    return () => {
      setItemsTotal(itemsTotal);
    };
  }, []);

  
  
  const addItem = (item, quantity) => {
    setItemsTotal(itemsTotal + quantity)
    setTotal(total + item.price * quantity)
    setCart([...cart,{ ...item, quantity }])

    if (isInCart(item.id)){
      console.log("actualizando cantidad del producto ",item.id);
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id){
          return {...cartItem, quantity: cartItem.quantity + quantity}
        } else{
          return cartItem
        }
      })
      setCart(newCart)
    } else{
      console.log("guardando producto ",item.id, " en carrito");
      setCart([...cart,{ ...item, quantity }])
    }
  }

  const isInCart = (id) => cart.find((item) => item.id === id)

  const valorContexto = {cart, itemsTotal, total, addItem, setCart, setItemsTotal}
  return <Provider value={valorContexto}>  {children}  </Provider>
}

export default CartProvider