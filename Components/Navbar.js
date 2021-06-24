import { Switch } from "@chakra-ui/react"
import styles from '../styles/NavbarFooter.module.css'
import Navlinks from './Navlinks'
import { useMediaQuery } from "@chakra-ui/react"

const Navbar = ({ toggleTheme, currentTheme }) => {
    const [drawerVisible] = useMediaQuery("(max-width: 950px)")

    return (
        <div className={styles.navbar} style={{ backgroundColor: currentTheme.secondary, boxShadow: currentTheme.boxShadow, padding: !drawerVisible ? '0.9rem 5rem 1.3rem 5rem' : '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'baseline', marginBottom: !drawerVisible ? '0' : '10px' }}>
                <h2 className={styles.logo} style={{ fontSize: !drawerVisible ? '30px' : '20px' }}>Asavari Ambavane</h2>
                {!drawerVisible
                    ? <div style={{ display: 'flex' }}>
                        <Navlinks />
                    </div>
                    : null
                }
                <Switch id="dark-mode" colorScheme="purple" size={!drawerVisible ? 'lg' : 'md'} onChange={() => toggleTheme()} />
            </div>
            {drawerVisible
                    ? <>
                    <hr></hr>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '10px' }}>
                        <Navlinks drawerVisible={drawerVisible}/>
                    </div>
                    </>
                    : null
                }
        </div>
    )
}

export default Navbar
