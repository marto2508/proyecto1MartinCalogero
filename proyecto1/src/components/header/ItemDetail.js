import react, {useEffect, useState, useContext} from 'react';
import ItemCount from './ItemCount';
import  { CartContext } from './context/CartContext';




const ItemDetail = ({id, title, description, price, image, stock}) => {


    const [stockActivo, setStockActivo] = useState (stock);
    const {addItem} = useContext (CartContext);

    useEffect(() => {
        setStockActivo(stock)

    },[stock])

    
    const onAddHandler = (cantidadElementos) => {
        const nuevoCantidadElemento = stockActivo - cantidadElementos;
        const item = {id, title, price, image, stock: nuevoCantidadElemento}
        setStockActivo(nuevoCantidadElemento);
        addItem (item, cantidadElementos);
       
    }

    

    return(
        <div style={styles.detalleCompra}>
            <div style={styles.descripcion} >
                <img src={image} alt='' style={styles.imagen}/>
                <h1 style={styles.detalle}> {title} </h1>
                <p style={styles.detalle}>{description}</p>
                <span style={styles.detalle}> ${price}</span>
            </div>
            <div>
                {stockActivo > 0 ? <ItemCount stock={ stockActivo } onAdd={ onAddHandler } initial={1}/> : <span>No hay stock disponible</span> }
             </div>
        
        </div>
    )

}


export default ItemDetail


const styles={


    detalleCompra:{
        fontFamily:'monospace',
        fontSize: '15px',
        display:'flex',
        boxSizing:'border-box',
        alignItems:'center',
        width:'100%',
        


    },

    imagen:{
        //flex:'1',
        width:'250px',
        height:'250px',
    },

    descripcion:{

    },

    detalle:{
        width:'70%',
        margin:'10px',
    }

}

