import react from 'react';
import Item from './Item';


const ItemList =({list}) => {

    return (
        <section className= "item-list">
            {list.map((product)=>  <Item key={product.id} {...product}/>)}
        </section>

        );
}

export default ItemList;


const stylesItemList = {

    
}



//Articulo={product.title} Descripcion={product.description} Precio={product.price} Imagen= {product. pictureUrl}