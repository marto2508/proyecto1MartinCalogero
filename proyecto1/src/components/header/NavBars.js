import logo from '../../assets/imagen_logo.png'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'


const NavBars = () => {
    return(
        <header style={styles.Container}>
            <div style={styles.imagenContainer}>
                <Link to="/"> <img src={logo} alt="logo" /></Link>
            </div>
            <h1 style={styles.h1}>Vestite como Gerardo</h1>
            <nav style={styles.navStyle}>
                <Link style={styles.anchors} to="category/RopaDeHombre"> Ropa de hombre </Link>
                <Link style={styles.anchors} to="category/RopaDeMujer"> Ropa de mujer </Link>
                <Link style={styles.anchors} to="category/Accesorios"> Accesorios </Link>  
            </nav>
            <div style={styles.carrito}>
               <CartWidget />
            </div>
        </header>
    )


}

export default NavBars


const styles = {

    Container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
       
    
    },
    
    navStyle:{
        display: 'flex',
        justifyContent:'space-between',
        flex:'1',
    },
    
    

    imagenContainer:{
        
        flex:'1',

    },
    
    anchors:{
        margin: 20,
    },


    h1:{
        flex:'1',
        textAlign: 'center',
    },

    carrito:{
        
        width: '100px',
        textAlign: 'center',
    },
}