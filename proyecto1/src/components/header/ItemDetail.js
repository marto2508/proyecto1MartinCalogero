import react from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from './ItemList';



const ItemDetail = ({title, description, price, image}) => {

    return(
        <>
            <img src={image} alt=''/>
            <h2> {title} </h2>
            <p>{description}</p>
            <span> ${price}</span>
        
        </>
    )

}


export default ItemDetail