import React, {useState, createContext, useEffect} from 'react'


export const CartContext = createContext ([]);
//const {Provider} =CartContext;


export const CustomProvider = ({children})=> {
    const [cartList, setCartList] = useState ([])


    const addItem = (item, qty) =>{
     
        let newCart;
        
        if(itemExists(item.id)) {
          newCart = cartList.map((element) => {
            if(element.id === item.id) {
              element.quantity += qty;
            }
            return element;
          })
        } else {
          const newItem = {
            ...item,
            quantity: parseInt(qty)
          }


          cartList.push (newItem)

        }  

    }

    const itemExists = (id) => {
      return cartList.find((element) => element.id === id);
    }


    const removeItem = (id) => {
      const newCart = [...cartList]
       newCart.map((e, index) => {
        if(e.id === parseInt(id)){
          newCart.splice(index,1);
        }
        return e;
      });
      setCartList(newCart);

      
    }
   
      

    


    const resetList = () => {
        setCartList([])
      }

    

    const isInList = (id) => {
      return cartList.find((element) => element.id === id)

    }

    const totalProductos = () =>{
      let totalProductos = 0  
    
      cartList.forEach(item => {
        totalProductos = totalProductos + (item.price * item.quantity)
        console.log(item.quantity)
      });

      return totalProductos
      
    }


    const totalItems = () => {
      console.log('a')
      let totalAmmount = 0;
      cartList.forEach((e) => {
        totalAmmount += e.quantity
      })
      
      return totalAmmount;
     
    }
    
     
    




  return (
    <CartContext.Provider value= {{cartList , addItem , removeItem , resetList, totalProductos, totalItems }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext