import styles from './module/header.module.css';

const Header = () => {
    return ( 
        <div className={styles.heading}>
            <h2>UbicaTec</h2>
            <button className={styles.botonAccess}>Ingresar</button>
        </div>
     );
}
export default Header;