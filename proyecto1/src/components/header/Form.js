
import React from 'react'


const cartForm = ({cartList, finalizar}) => {
  



    return(
        <form>
            <label for="nombre ">Nombre  </label>
            <input type="text"id= "nombre" />
            <br></br>
            <label for="telefono">Telefono</label>
            <input type="text"id= "telefono"/>
            <br></br>
            <label for="Email">Email</label>
            <input type="text"id= "Email"/>
            <br></br>
            <label for="creditCard">Tarjeta de credito</label>
            <input type="text"id="creditCard"/>
            <br></br>
            <button disabled ={ cartList = 0} onClick=  {finalizar}>Comprar</button>    
        </form>
    )
}
export default cartForm