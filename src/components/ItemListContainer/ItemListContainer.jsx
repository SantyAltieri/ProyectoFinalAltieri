import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { category } = useParams()

  useEffect(() => {
    const productsCollection = collection(db, 'products');
    let queryCollection;
  
    if (category) {
      queryCollection = query(productsCollection, where('category', '==', category));
    } else {
      queryCollection = productsCollection;
    }
  
    getDocs(queryCollection)
      .then((querySnapshot) => {
        const productsFormatted = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsFormatted);
      })
      .finally(() => {
        console.log(products);        
      });
  }, [category]);
  

  return (
    <ItemList products = {products}/>
  )
}

export default ItemListContainer