import { Title } from '@mui/icons-material'
import React, {useContext } from 'react'
import CartContext from './context/CartContext'


const Cart = () => {

  const { cartList, totalProductos, removeItem} = useContext (CartContext)
  






  return (
    <>
      {cartList.map((item) => { 
        return (
          <div key= {item.id} >
            <img src={item.image} alt=''/>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <div>{item.quantity}</div>
            <button onClick = {() => removeItem (item.id)}> Eliminar producto </button>
          </div>

        )
      })}
      <span> Total compra: {totalProductos()} </span>

    </>
  )



}

export default Cart