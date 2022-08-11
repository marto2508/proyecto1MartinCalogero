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
        <div style={styles.botonesCarrito}>
            <div style={styles.contador}>
                <button style={styles.mas} disabled ={contador >= stock} onClick={increase}>+</button>
                <span style={styles.numero}>{contador}</span>
                <button style={styles.menos}disabled = {contador <= 0} onClick={decrease}>-</button>
            </div>
            <div style={styles.compra}>
                <button disabled ={stock <=0} onClick ={()=> onAdd (contador)} >Agregar al carrito</button> 
                <button style={styles.botonLimpiar} onClick={reset}>Limpiar carrito</button>
            </div>
             
        </div>
    )

} 

export default ItemCount;

const styles={

    botonesCarrito:{
        
        margin:'200px',
        marginBottom:'300px',
        boxSizing:'border-box',
    },

    mas:{
        marginRight:'3px',
    },

    menos:{
        marginLeft:'3px',
    },

    numero:{
        fontFamily:'monospace'
    },

    compra:{
        width:'150px',
        paddingTop:'5px',
    
    },

    botonLimpiar:{
        marginTop:'5px',
    }

}
