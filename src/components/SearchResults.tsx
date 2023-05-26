import { useContext } from 'react';
import { LugaresContext, MapContext } from '../context';
import styles from './module/busqueda.module.css';
import { Places } from '../interfaces/Places';

const SearchResults = () => {
    const {lugares, isLoadingLugares} = useContext(LugaresContext);
    const { mapa } = useContext(MapContext)
    const onFly = (place:Places) => {
        let [lng, lat] = place.cardinate;
        mapa?.flyTo({
            zoom: 18,
            center: [lng, lat]
        });
    }
    if (isLoadingLugares) {
        return(
            <article className={styles.resultItem}>
                <h3>cargando...</h3>
            </article>
        );
    }
    if(lugares.length === 0) {
        return(<></>);
    }
    return ( 
        <div className={styles.boxResults}>
            {lugares.map(lugar => (
                <article className={styles.resultItem}>
                    <h3>{lugar.nombre}</h3>
                    <button onClick={() => onFly(lugar)}>Como Llegar</button>
                </article>
            ))}
        </div>
    );
}
 
export default SearchResults;