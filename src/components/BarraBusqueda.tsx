import { FaSearch } from "react-icons/fa";
import styles from './module/busqueda.module.css';
import { ChangeEvent, useRef, useContext } from "react";
import { LugaresContext } from "../context";
import SearchResults from "./SearchResults";

const BarraBusqueda = () => {
    const { searchPlaces } = useContext(LugaresContext);
    const debaunceRef = useRef<any>();

    const onQueryRef = (evt : ChangeEvent<HTMLInputElement>) => {
        if (debaunceRef.current)
            clearTimeout(debaunceRef.current);

        debaunceRef.current = setTimeout(() => {
            let texto:string = evt.target.value;
            searchPlaces(texto.toUpperCase());
        }, 1000);
    }

    return ( 
        <>
            <div className={styles.searchBar}>
                <input type='text' placeholder='¿A donde deseas ir?' onChange={onQueryRef}/>
                <button className={styles.btnSearchLoup}>
                    <FaSearch/>
                </button>
            </div>
            <SearchResults/>
        </>
     );
}
 
export default BarraBusqueda;