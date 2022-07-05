import { fontFamily, fontSize } from "@mui/system";
import ItemCount from './ItemCount'
import react, {useState, useEffect} from 'react';
import ItemList from './ItemList';


const initialProducts = [
    {id:0 , title:'Remera' , description:'Gris con escote en  v' , price: 800 , pictureUrl:'via.placeholder.com/300'},
    {id:1 , title:'Pantalon largo' , description:'Negro algodon' , price: 2.200 , pictureUrl:'via.placeholder.com/300'},
    {id:2 , title:'Buzo' , description:'Azul cuello cerrado' , price: 1500 , pictureUrl:'via.placeholder.com/300'},
    {id:3 , title:'Campera' , description:'Nega rompeviento' , price: 5.000 , pictureUrl:'via.placeholder.com/300'},
    {id:4 , title:'Remera' , description:'Azul escote en  v' , price: 800 , pictureUrl:'via.placeholder.com/300'},
    {id:5 , title:'Pantalon corto' , description:'Blanco dryfit' , price: 1.600 , pictureUrl:'via.placeholder.com/300'},

]

const promesa =new Promise ((res, rej) =>{
    setTimeout(() => {
        res(initialProducts);
    },2000);
    });
 



const onAdd = (contador) =>{
    alert(`Compraste ${contador} de unidades`);
  }

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        promesa.then((data) => {
            setProducts(data);
        }).catch(() =>{
            console.log('todo mal')
        })
    },[])

    return(
        <div>
            <p style={stylesItem.texto} className="texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero illum eligendi maxime cum aliquid placeat veritatis dolor laboriosam eveniet officiis non commodi fugit consequuntur, provident delectus, laudantium, facere nisi?</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
            {products.map((product)=> <div key= {product.id}> <span>{product.title}</span> <span>{product.description}</span><span>{product.price}</span> <span>{product.description}</span> <span> {product. pictureUrl}</span> </div>)}
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