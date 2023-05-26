import styles from './module/login.module.css';

const Login = () => {
    return (
        <div className={styles.containLogin}>
            <img src='public/logo-ubica-tec.png' alt='LOGO' className={styles.imgLoager}/>
            <form className={styles.loginComponent}>
                <h2 className={styles.loginTitler}>Iniciar session</h2>
                <input type='text' placeholder='Ususario'/>
                <input type='password' placeholder='Contraseña'/>
                <button className={styles.btnLogger}>Sing in</button>
            </form>
        </div>
    );
}
 
export default Login;