import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useNavigate, useParams} from 'react-router-dom'
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {
      const productsCollection = collection(db, 'products');
      const refDoc = doc(productsCollection, id)   

      getDoc(refDoc)
      .then((doc) => {        
          setProducto({id: doc.id, ...doc.data()})
        });
        console.log(producto);
    }, [id]);

  return (
  <>
        <ItemDetail producto ={producto} />
  </>
  )
}
export default ItemDetailContainer