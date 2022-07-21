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
        const item = {id, title, price, image}
        const nuevoCantidadElemento = stockActivo - cantidadElementos;
        setStockActivo(nuevoCantidadElemento);
        addItem (item, cantidadElementos);
       
    }

    

    return(
        <>
            
            <img src={image} alt=''/>
            <h2> {title} </h2>
            <p>{description}</p>
            <span> ${price}</span>
            {stockActivo > 0 ? <ItemCount stock={ stockActivo } onAdd={ onAddHandler } initial={1}/> : <span>No hay stock disponible</span> }
             
        
        </>
    )

}


export default ItemDetail