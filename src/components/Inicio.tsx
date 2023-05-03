import Avisos from './Avisos';
import BarraBusqueda from './BarraBusqueda';
import Header from './Header';
import MapView from './MapView';
import styles from './module/inicio.module.css';

const Inicio = () => {
    return ( 
        <div>
            <Header />
            <div className={styles.contentContain} >
                <BarraBusqueda />
                <MapView />
                <Avisos />
            </div>
        </div>
    );
}
 
export default Inicio;
