import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';



const initialProducts = [
    {id:0 , title:'Remera' , description:'Gris con escote en  v' , price: "800" , image:"https://via.placeholder.com/300" ,category: "RopaDeHombre",stock:"10"} ,
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
 


    const ItemDetailContainer = () => {

        const {itemId}= useParams ();

        const [products, setProducts] = useState([])
    
        useEffect (() => {
            promesa.then((data) => {
                setProducts(data);
            }).catch(() =>{
                console.log('todo mal')
            })
        },[])
        
       
        
        const product = products
            .find((product) => { 
                return product.id === parseInt(itemId);
            
            
            })

            

    return(
         <>
            <ItemDetail  {...product}/>
         </>
    )

}
    export default ItemDetailContainer