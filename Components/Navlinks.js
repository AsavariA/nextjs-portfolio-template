import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navlinks = ({drawerVisible}) => {
    const inlineStyles = {
        padding: !drawerVisible ? '0 1.5rem' : '0.5rem',
        fontSize: !drawerVisible ? '15px' : '12px'
    }

    return (
        <>
            <div className={styles.navlinks} style={inlineStyles}>
                <Link href='/'><a>Home</a></Link>
            </div>
            <div className={styles.navlinks} style={inlineStyles}>
                <Link href='/about'><a>About</a></Link>
            </div>
            <div className={styles.navlinks} style={inlineStyles}>
                <Link href='/work'><a>Work</a></Link>
            </div>
            <div className={styles.navlinks} style={inlineStyles}>
                <Link href='/contact'><a>Contact</a></Link>
            </div>
        </>

    )
}

export default Navlinks
