import { fontFamily, fontSize } from "@mui/system";
import ItemCount from './ItemCount'

const onAdd = (contador) =>{
    alert(`Compraste ${contador} de unidades`);
  }

const ItemListContainer = () => {
    return(
        <div>
            <p style={stylesItem.texto} className="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero illum eligendi maxime cum aliquid placeat veritatis dolor laboriosam eveniet officiis non commodi fugit consequuntur, provident delectus, laudantium, facere nisi?</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
        </div>
        
    )

}


export default ItemListContainer;


const stylesItem = {

texto: {
    fontSize:'30px',
    fontFamily:'arial',
    textAlign: 'center',

}

}