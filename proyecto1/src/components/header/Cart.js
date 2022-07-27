import { ProductionQuantityLimits, Title } from '@mui/icons-material'
import React, {useContext, useState } from 'react'
import CartContext from './context/CartContext'
import { db } from '../../Firebase/Firebase'
import { doc, addDoc, collection, serverTimestamp,updateDoc } from 'firebase/firestore'
import CartForm from './Form'


const Cart = () => {

  const { cartList, totalProductos, removeItem} = useContext (CartContext)
  const [idVenta, setidVenta] =useState("")
  

  const datosComprador = {

  }

  const finalizarCompra = () => {
    const ventasCollection = collection (db, 'ventas' );
    addDoc(ventasCollection, {
      datosComprador,
      items: cartList,
      date: serverTimestamp(),
      total:totalProductos,
    })
    .then((result) => {
      setidVenta(result.id);  
    });

    cartList.foreach((product)=> {
      const updateCollection = doc(db, 'initialproducts', product.id)
      updateDoc(updateCollection, {stock: product.stock - product.qty})
    })

    
  }



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
            <button onClick = {finalizarCompra}> Finalizar </button>
          </div>

        )
      })}
      <span> Total compra: {totalProductos()} </span>
      <CartForm cartList={cartList} finalizar={finalizarCompra}/>
    </>
  )



}

export default Cart