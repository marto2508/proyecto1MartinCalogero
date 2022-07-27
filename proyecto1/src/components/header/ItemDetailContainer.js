import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import { db } from "../../Firebase/Firebase";
import { getDoc, collection, doc } from "firebase/firestore";





 
    

    const ItemDetailContainer = () => {

        const {itemId}= useParams ();

        const [product, setProduct] = useState([])
    
        useEffect (() => {
            const productCollection= collection(db, "initialproducts");
            const refDoc = doc(productCollection, itemId);
            getDoc(refDoc)
            .then(result => {
                const producto = {
                    id:result.id,
                    ...result.data(),
                }
                setProduct(producto);
            })
           /*promesa.then((data) => {
                setProducts(data);
            }).catch(() =>{
                console.log('todo mal')
            })*/

        },[])
        
       
        
       

            

    return(
         <>
            <ItemDetail  {...product}/>
         </>
    )

}
    export default ItemDetailContainer