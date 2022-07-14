import react, {useState} from 'react';
import ItemCount from './ItemCount';




const ItemDetail = ({title, description, price, image, stock}) => {


    const [stockActivo, setStockActivo] = useState (stock);

    const onAddHandler = (cantidadElementos) => {
        const nuevoCantidadElemento = stockActivo - cantidadElementos;
        setStockActivo(nuevoCantidadElemento);
       
    }



    return(
        <>
            <img src={image} alt=''/>
            <h2> {title} </h2>
            <p>{description}</p>
            <span> ${price}</span>
            {stockActivo > 0 ? <ItemCount stock={ stockActivo } onAdd={ onAddHandler } /> : <span>No hay stock disponible</span> }
               
        
        </>
    )

}


export default ItemDetail