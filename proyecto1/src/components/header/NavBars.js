import logo from '../../assets/imagen_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const NavBars = () => {
    return(
        <header style={styles.Container}>
            <div style={styles.imagenContainer}>
                <img src={logo} alt="logo" />
            </div>
            <h1 style={styles.h1}>Verduleria online</h1>
            <nav style={styles.navStyle}>
                <a style={styles.anchors} href=""> Quienes somos </a>
                <a style={styles.anchors} href=""> Galeria </a>
                <a style={styles.anchors} href=""> Productos </a>  
            </nav>
            <div style={styles.carrito}>
                <FontAwesomeIcon  icon={faCartShopping}/>
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
        margin: 10,
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