import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    console.log("itemList", products);
    return (
        <div>
        {    
            products.map((elemento) => {
                console.log("elemtos list", elemento);
                return <Item key={elemento.id} product ={elemento}/>
            })
        }
        </div>
    )

}

export default ItemList