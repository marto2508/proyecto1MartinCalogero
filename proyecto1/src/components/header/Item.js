import { height } from '@mui/system';
import react from 'react';

const Item = ({image, title, description, price}) => {
    return(
        <div style={stylesItem.article}>
            <img src={image} alt=''/>
            <h2> {title} </h2>
            <p>{description}</p>
            <span> ${price}</span>
        </div>
    )

}

export default Item;


const stylesItem = {

    article: {
        //width: '150px',
        //height: '150px',
        margin: '15px',
        
         
    }, 
    
    img:{
        maxwidth:'250px',
    }
  

}

