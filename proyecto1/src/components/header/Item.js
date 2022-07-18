import { height } from '@mui/system';
import { Link } from 'react-router-dom';



const Item = ({id, image, title, description, price}) => {

    const link = `/item/${id}`

   

    return(
        <div style={stylesItem.article}>
            <img style={stylesItem.img} src={image} alt=''/>
            <h2> {title} </h2>
            <Link to= {link}>Ver detalle</Link>
            <p>{description}</p>
            <span> ${price}</span>
        </div>
    )

}

export default Item;


const stylesItem = {

    article: {
        
        
        margin: '15px',
        
         
    }, 
    
    img:{
        width:'25%',
    }
  

}

