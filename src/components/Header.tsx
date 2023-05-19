import { useContext } from 'react';
import styles from './module/header.module.css';
import { LugaresContext, MapContext } from '../context';

const Header = () => {
    const { mapa, isMapLoad } = useContext(MapContext);
    const { location } = useContext(LugaresContext);

    function volverUb() {
        if (!location) throw new Error('No puedes realizar esta accion');
        if (!isMapLoad) throw new Error('El mapa aun no ha cargado: intentalo mas tarde');

        mapa?.flyTo({
            zoom: 16,
            center: location
        });
    }

    return ( 
        <div className={styles.heading}>
            <div className={styles.logo}>
                <h2 className={styles.prelog}>Ubica</h2><h2 className={styles.postlog}>TEC</h2>
            </div>
            <button 
            className={styles.botonAccess}
            onClick={volverUb}>
                Regresar
            </button>
        </div>
     );
}
export default Header;