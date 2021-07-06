import styles from '../styles/Work.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn, faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'
import { HStack, Tag, TagLabel } from "@chakra-ui/react"

const WorkProject = ({ currentTheme }) => {
    return (
        <div className={styles.parentcard}>
            <div className={styles.cardtitle}>
                <h1 className={styles.projtitle}>Project title</h1>
                <HStack spacing={2}>
                    <Tag size="md" borderRadius="md" variant="subtle" colorScheme="cyan">
                        <TagLabel>Green</TagLabel>
                    </Tag>
                    <Tag size="md" borderRadius="md" variant="subtle" colorScheme="cyan">
                        <TagLabel>Green</TagLabel>
                    </Tag>
                    <Tag size="md" borderRadius="md" variant="subtle" colorScheme="cyan">
                        <TagLabel>Green</TagLabel>
                    </Tag>
                </HStack>
            </div>
            <div className={styles.imageandsocials}>
                <div className={styles.card}>
                    <div className={styles.arrows}>
                        <p onClick={() => alert('clicked back')}>&lt;</p>
                        <p onClick={() => alert('clicked ahead')}>&gt;</p>
                    </div>
                </div>
                <div>
                    <div className={styles.socialIcon}>
                        <Link href="https://github.com/AsavariA"><a><FontAwesomeIcon icon={faGithubAlt} /></a></Link>
                    </div>
                    <div className={styles.socialIcon}>
                        <Link href="https://www.linkedin.com/in/asavariambavane/"><a><FontAwesomeIcon icon={faTelegramPlane} /></a></Link>
                    </div>
                </div>
            </div>
            <div className={styles.cardbottom}>
                <p className={styles.projdescription}>A Commercial Website for the branding agency, INZA Design Co. Seamlt an aesthetic feel to it.</p>
                <div className={styles.cta}><i>Check it out &rarr;</i></div>
            </div>
        </div>
    )
}

export default WorkProject
