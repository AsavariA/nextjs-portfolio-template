import { Switch } from "@chakra-ui/react"
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = ({ toggleTheme, currentTheme }) => {
    return (
        <div className={styles.navbar} style={{ backgroundColor: currentTheme.secondary, boxShadow: currentTheme.boxShadow }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'baseline' }}>
                <h2 className={styles.logo}>Asavari Ambavane</h2>
                <div style={{ display: 'flex' }}>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <Link href='/'><a>Home</a></Link>
                    </div>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <Link href='/about'><a>About</a></Link>
                    </div>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <Link href='/work'><a>Work</a></Link>
                    </div>
                    <div className={styles.navlinks} style={{ padding: '0 1.5rem' }}>
                        <Link href='/contact'><a>Contact</a></Link>
                    </div>
                </div>
                <Switch id="dark-mode" colorScheme="purple" size="lg" onChange={() => toggleTheme()} />
            </div>
        </div>
    )
}

export default Navbar
