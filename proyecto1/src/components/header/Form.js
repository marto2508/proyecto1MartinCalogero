import CartContext from './context/CartContext'
import React, {useContext} from 'react'


const CartForm = ({cartList, finalizar, actualizarUsuario}) => {
  
    const {totalItems} = useContext (CartContext)

    
    return(
        <form style={styles.formulario}>
            
            <input style={styles.input} type="text"id= "nombre" name= "nombre" placeholder='Nombre' onChange={actualizarUsuario}/>
            <input style={styles.input} type="text"id= "telefono" name= "telefono" placeholder='Telefono' onChange={actualizarUsuario}/>
            <input style={styles.input} type="text"id= "Email" name= "Email" placeholder='Email' onChange={actualizarUsuario}/>
            <input style={styles.input} type="text"id= "creditCard" name= "creditCard" placeholder='Tarjeta de credito' onChange={actualizarUsuario}/>
            <button style={styles.boton} disabled ={totalItems() === 0}  onClick=  {finalizar}>Comprar</button>    
            
        </form>
    )
}
export default CartForm


const styles ={

    formulario:{
        width:'450px',
        margin: 'auto',
        background: 'rgba(0,0,0,0.4)',
        boxSizing:'border-box',
        borderRadius:'7px',
        padding:'10px 20px',
        fontFamily: 'monospace',
        
        
    },

    input:{
        width:'100%',
        boxSizing:'border-box',
        border: 'none',
        marginBottom:'15px',
        padding:'7px',



    },

    boton:{
        width:'100%',
        background:'#31384A',
        color:'#fff',
        padding:'7px',
        fontSize:'15px',

    },




}