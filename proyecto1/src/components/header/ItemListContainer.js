import { fontFamily, fontSize } from "@mui/system";
import ItemCount from './ItemCount'
import react, {useState, useEffect} from 'react';
import ItemList from './ItemList'
import { useParams } from "react-router-dom";


const initialProducts = [
    {id:0 , title:'Remera' , description:'Gris con escote en  v' , price: "800" , image:"https://via.placeholder.com/300" ,category: "RopaDeHombre" ,stock:"10"} ,
    {id:1 , title:'Pantalon largo' , description:'Negro algodon' , price: "2200" , image:"https://via.placeholder.com/300" ,category: "RopaDeHombre",stock:"10"},
    {id:2 , title:'Buzo' , description:'Azul cuello cerrado' , price: "1500" , image:"https://via.placeholder.com/300" ,category: "RopaDeMujer",stock:"10"},
    {id:3 , title:'Campera' , description:'Nega rompeviento' , price: "5000" , image:"https://via.placeholder.com/300" ,category: "RopaDeHombre",stock:"10"},
    {id:4 , title:'Remera' , description:'Azul escote en  v' , price: "800" , image:"https://via.placeholder.com/300" ,category: "RopaDeMujer",stock:"10"},
    {id:5 , title:'Gorra' , description:'Blanco dryfit' , price: "1600" , image:"https://via.placeholder.com/300" ,category: "Accesorios",stock:"10"},

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

    const {categoryName}= useParams ();

   


    const [products, setProducts] = useState([])

    useEffect (() => {
        promesa.then((data) => {
            setProducts(data);
        }).catch(() =>{
            console.log('todo mal')
        })
    },[categoryName])
    

   
        const filtroPorCategoria = products
            .filter((product) => { 

                return product.category === categoryName;
            
            
            })



            const productItems = categoryName ? filtroPorCategoria : products;

        
        console.log (filtroPorCategoria);
    



    return(
        <div>
            <p style={stylesItemListContainer.texto} className="texto">Bienvenido amigos de Gerardo</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
            <ItemList list={productItems} />
            
           
        </div>
        
    )

}


export default ItemListContainer;


const stylesItemListContainer = {

texto: {
    fontSize:'30px',
    fontFamily:'arial',
    textAlign: 'center',

}

}