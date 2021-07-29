import React from 'react'
import styles from '../styles/Home.module.css'

const Education = ({ currentTheme }) => {
    return (
        <div className={styles.educationWrapper}>
            <div className={styles.workheading} data-aos="fade-up">
                Education
            </div>

            <div className={styles.timeline}>
                <ul>
                    <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className={styles.content}>
                            <h3 style={{ color: currentTheme.accent }}>B.Tech Electronics Engineering</h3>
                            <p style={{ color: currentTheme.text }}>Veermata Jijabai Technological Institute, Mumbai.</p>
                            <p style={{ color: currentTheme.subtext }}>Currently a sophomore at VJTI with a CGPA of 9.55.</p>
                        </div>
                        <div className={styles.time} style={{ background: currentTheme.accent, color: currentTheme.contrastText }}>
                            <h4>2019 - present</h4>
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className={styles.content}>
                            <h3 style={{ color: currentTheme.accent }}>B.Tech Electronics Engineering</h3>
                            <p style={{ color: currentTheme.text }}>Veermata Jijabai Technological Institute, Mumbai.</p>
                            <p style={{ color: currentTheme.subtext }}>Currently a sophomore at VJTI with a CGPA of 9.55.</p>
                        </div>
                        <div className={styles.time} style={{ background: currentTheme.accent, color: currentTheme.contrastText }}>
                            <h4>2019 - present</h4>
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <div className={styles.content}>
                            <h3 style={{ color: currentTheme.accent }}>B.Tech Electronics Engineering</h3>
                            <p style={{ color: currentTheme.text }}>Veermata Jijabai Technological Institute, Mumbai.</p>
                            <p style={{ color: currentTheme.subtext }}>Currently a sophomore at VJTI with a CGPA of 9.55.</p>
                        </div>
                        <div className={styles.time} style={{ background: currentTheme.accent, color: currentTheme.contrastText }}>
                            <h4>2019 - present</h4>
                        </div>
                    </li>
                    <div style={{ clear: 'both' }}></div>
                </ul>
            </div>

        </div>
    )
}

export default Education
