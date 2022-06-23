import { fontFamily, fontSize } from "@mui/system";

const ItemListContainer = () => {
    return(
        <div>
            <p style={stylesItem.texto} className="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero illum eligendi maxime cum aliquid placeat veritatis dolor laboriosam eveniet officiis non commodi fugit consequuntur, provident delectus, laudantium, facere nisi?</p> 
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