import { ProductionQuantityLimits, Title } from '@mui/icons-material'
import React, {useContext, useState } from 'react'
import CartContext from './context/CartContext'
import { db } from '../../Firebase/Firebase'
import { doc, addDoc, collection, serverTimestamp,updateDoc } from 'firebase/firestore'
import CartForm from './Form'



const Cart = () => {

  const { cartList, totalProductos, removeItem, resetList} = useContext (CartContext)
  const [idVenta, setidVenta] =useState("")
  const [ datos, setDatos ] = useState({
    nombre: '',
    telefono: '',
    Email: '',
    creditCard: ''
  });
  
  const actualizarDatos = (event) =>{
    const target = event.target;
    const value = target.value;
    const name = target.name;
    

    setDatos({
      ...datos,
      [name]:value
    });

  } 

   
 

  const finalizarCompra = (e) => {
    e.preventDefault()
    const ventasCollection = collection (db, 'ventas' );
    addDoc(ventasCollection, {
      ...datos,
      items: cartList,
      date: serverTimestamp(),
      total:totalProductos(),
    })
    .then((result) => {
      setidVenta(result.id); 
      resetList()


      
      alert(result.id);
    });

    

    cartList.forEach((product)=> {
      const updateCollection = doc(db, 'initialproducts', product.id)
      updateDoc(updateCollection, {stock: product.stock - product.quantity})
    })

    
  }



  return (
    <>
      {cartList.map((item) => { 
        return (
          <div style={styles.container} key= {item.id} >
            <div style={styles.imagen}><img style={styles.imagen} src={item.image} alt=''/></div>
            <div style={styles.flex}><span>{item.title}</span></div>
            <div style={styles.flex}><span>{item.price}</span></div>
            <div style={styles.flex}>{item.quantity}</div>
            <div style={styles.boton}><button onClick = {() => removeItem (item.id)}> Eliminar producto </button></div>
          </div>

        )
      })}
      <span style={styles.total}> Total compra:$ {totalProductos()} </span>
      <CartForm cartList={cartList} finalizar={finalizarCompra} actualizarUsuario={actualizarDatos}/>
    </>
  )



}

export default Cart


const styles ={
  container:{
    display:'flex',
    marginBottom:'10px',
   
    
  },

  flex:{
    flex:'1',
    
    display:'flex',
    fontFamily: 'monospace',
    fontSize: '20px',
    marginTop:'0px',
    alignItems:'center',

  },

  imagen:{
    flex:'1',
    width:'150px',
    height:'150px',
  },

  boton:{
    flex:'1',
    display:'flex',
    boxSizing:'border-box',
    alignItems:'center',
  },

  total:{
    fontFamily:'monospace',
    fontSize: '20px',
  },

}