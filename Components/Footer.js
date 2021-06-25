import styles from '../styles/NavbarFooter.module.css';

const Footer = ({currentTheme}) => {
    return (
        <div className={styles.footermain} style={{backgroundColor: currentTheme.footerColor}}>
            <h2 className={styles.footercontent}>Asavari Ambavane | Copyright © 2021</h2>
        </div>
    )
}

export default Footer
