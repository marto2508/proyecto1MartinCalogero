import React, {useState} from "react";
import ItemDetail from "./ItemDetail";

    const ItemCount = ({initial, stock, onAdd}) => {
    const [contador, setContador] = useState(initial);

    const increase = () => {
        setContador(contador+1);
    }

    const decrease =() => {
        setContador(contador-1);
    }

    const reset = () =>{
        setContador(0)
    }


    return(
        <>
            <h1>{contador}</h1>
            <button disabled ={contador >= stock} onClick={increase}>Agregar</button>
            <button disabled = {contador <= 0} onClick={decrease}>Restar</button>
            <button disabled ={stock <=0} onClick ={()=> onAdd (contador)}>Agregar al carrito</button> 
            <button onClick={reset}>Limpiar carrito</button>
             
        </>
    )

} 

export default ItemCount;
