import { AiFillHome, AiOutlineUserSwitch } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styles from './module/menubar.module.css'
const MenuBar = () => {
    return (
        <div className={styles.menuBar}>
            <button className={styles.btnMenu}>
                <AiFillHome/>
            </button>
            <button className={styles.btnMenu}>
                <FaMapMarkerAlt/>
            </button>
            <button className={styles.btnMenu}>
                <AiOutlineUserSwitch/>
            </button>
        </div>
    );
}
 
export default MenuBar;