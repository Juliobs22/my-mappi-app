import styles from './module/Loader.module.css';

const Loader = () => {
    return (
        <div className= { styles.loadContainer }>
            <div className='loaderText'>
                <h3>Cargando</h3>
                <span>Localizando...</span>
            </div>
        </div>
    );
}
 
export default Loader;