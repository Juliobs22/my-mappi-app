import styles from './module/footer.module.css';

const Footer = () => {
    return ( 
        <footer className={styles.foot}>
            <div>
                <h1>UbicaTEC</h1>
                <img src="https://res.cloudinary.com/dxqgwdirs/image/upload/v1685102568/logo-ubica-tec_oftzxa.png" alt="LOGO" className={styles.imgLogoFoot} />
            </div>
            <div className={styles.aviPriv}>
                <article>
                    <h3>Aviso de Derechos de Privacidad</h3>
                    <p>
                    Nosotros, como UbicaTEC MR, nos comprometemos a proteger tu privacidad 
                    y tus datos personales. Este aviso tiene como objetivo informarte sobre 
                    cómo recopilamos, utilizamos, divulgamos y protegemos la información
                    que nos proporcionas cuando utilizas <a href='#'>nuestros servicios</a>.
                    </p>
                </article>
                <br/>
                <h3>Por:</h3>
                <ul className={styles.ulList}>
                    <li>Julio Barrera Sánchez</li>
                    <li>Nuria Jaqueline Rivera Delgado</li>
                </ul>
            </div>
        </footer>
    );
}
 
export default Footer;