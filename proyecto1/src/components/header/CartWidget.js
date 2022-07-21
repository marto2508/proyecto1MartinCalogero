import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import CartContext from './context/CartContext'

const CartWidget = () => {

  const {totalItems} = useContext (CartContext)



  return (
    
    <Link className="cartButton" to="/cart">
        <FontAwesomeIcon icon={faCartShopping}/>
        <span> {totalItems()} </span>
    </Link>
   
  )
}

export default CartWidget


