import react from 'react';
import Item from './Item';


const ItemList =({list}) => {

    return (
        <section style={styles.container} className= "item-list">
            {list.map((product)=>  <Item key={product.id} {...product}/>)}
        </section>

        );
}

export default ItemList;


const stylesItemList = {

    
}

const styles={
    container:{
        display:'flex',
        flexWrap:'wrap',
        width:'100%',
    }

}

