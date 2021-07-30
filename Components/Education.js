import React from 'react'
import styles from '../styles/Home.module.css'
import { userinfo } from '../Constants/userinfo'

const Education = ({ currentTheme }) => {
    return (
        <div className={styles.educationWrapper}>
            <div className={styles.workheading} data-aos="fade-up">
                Education
            </div>

            <div className={styles.timeline}>
                <ul>
                    {
                        userinfo.education ?
                            userinfo.education.map((value, key) => {
                                return (
                                    <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" key={key}>
                                        <div className={styles.content}>
                                            <h3 style={{ color: currentTheme.accent }}>{value.title}</h3>
                                            <p style={{ color: currentTheme.text }}>{value.organization}</p>
                                            <p style={{ color: currentTheme.subtext }}>{value.description}</p>
                                        </div>
                                        <div className={styles.time} style={{ background: currentTheme.accent, color: currentTheme.contrastText }}>
                                            <h4>{value.time}</h4>
                                        </div>
                                    </li>
                                )
                            }) : null
                    }
                    <div style={{ clear: 'both' }}></div>
                </ul>
            </div>

        </div>
    )
}

export default Education
