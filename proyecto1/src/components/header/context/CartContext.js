import React, {useState, createContext} from 'react'


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
      const newCart = cartList.map((e, index) => {
        if(e.id === id){
          cartList.splice(index,1);
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



  return (
    <CartContext.Provider value= {{cartList , addItem , removeItem , resetList }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext