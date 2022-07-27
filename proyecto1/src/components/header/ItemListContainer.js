
import react, {useState, useEffect} from 'react';
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { ResetTvOutlined } from '@mui/icons-material';



 const onAdd = (contador) =>{
    alert(`Compraste ${contador} de unidades`);
  }

const ItemListContainer = () => {

    const {categoryName}= useParams ();

   
    const [products, setProducts] = useState([])

    useEffect (() => {

        let q
        const productCollection = collection (db, "initialproducts");
        if(categoryName){
            q = query(productCollection, where("category", "==",categoryName )); 
        } else { 
            q = productCollection
        }

        getDocs(q)
        .then(result => {
            const lista = result.docs.map(doc =>{
                return {
                    id: doc.id,
                    ...doc.data(),
                }

            }) 
            setProducts(lista);
        })

        /*promesa.then((data) => {
            setProducts(data);
        }).catch(() =>{
            console.log('todo mal')
        })*/
    },[categoryName])
    

   
        const filtroPorCategoria = products
            .filter((product) => { 

                return product.category === categoryName;
            
            
            })



            const productItems = categoryName ? filtroPorCategoria : products;

        
        
    



    return(
        <div>
            <p style={stylesItemListContainer.texto} className="texto">Bienvenido amigos de Gerardo</p>
            
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