import styles from './module/header.module.css';

const Header = () => {
    return ( 
        <div className={styles.heading}>
            <div className={styles.logo}>
                <h2 className={styles.prelog}>Ubica</h2><h2 className={styles.postlog}>TEC</h2>
            </div>
            <button className={styles.botonAccess}>Ingresar</button>
        </div>
     );
}
export default Header;