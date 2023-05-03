import { FaSearch } from "react-icons/fa";
import styles from './module/busqueda.module.css';

const BarraBusqueda = () => {
    return ( 
        <div className={styles.searchBar}>
            <input type='text' placeholder='¿A donde deseas ir?'/>
            <button className={styles.btnSearchLoup}>
                <FaSearch/>
            </button>
        </div>
     );
}
 
export default BarraBusqueda;