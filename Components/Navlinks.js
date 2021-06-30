import React from 'react'
import styles from '../styles/NavbarFooter.module.css'
import Link from 'next/link'

const Navlinks = () => {

    return (
        <>
            <div className={styles.navlinks}>
                <Link href='/'><a>Home</a></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/#about'><a>About</a></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/work'><a>Work</a></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/contact'><a>Contact</a></Link>
            </div>
        </>

    )
}

export default Navlinks
