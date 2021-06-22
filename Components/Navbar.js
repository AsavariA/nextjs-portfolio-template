import { Switch, Flex, Spacer } from "@chakra-ui/react"
import styles from '../styles/Navbar.module.css'

const Navbar = ({ toggleTheme, currentTheme }) => {
    return (
        <div className={styles.navbar} style={{ backgroundColor: currentTheme.secondary, boxShadow: currentTheme.boxShadow }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'baseline' }}>
                <h2 className={styles.logo}>Asavari Ambavane</h2>
                <div style={{ display: 'flex' }}>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <a>Home</a>
                    </div>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <a>About</a>
                    </div>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <a>Work</a>
                    </div>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <a>Contact</a>
                    </div>
                </div>
                <Switch id="dark-mode" colorScheme="purple" size="lg" onChange={() => toggleTheme()} />
            </div>
        </div>
    )
}

export default Navbar
