import { Stack, Input, Textarea } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import styles from '../styles/Contact.module.css'

const Contact = ({currentTheme}) => {
    const [drawerVisible] = useMediaQuery("(max-width: 850px)")
    return (
        <div style={{width: !drawerVisible ? '40%' : '80%', margin: !drawerVisible ? '1rem auto' : '0.5rem auto', padding: !drawerVisible ? '1rem' : '0.5rem'}}>
        <div style={{padding: !drawerVisible ? '1rem' : '0.5rem'}}>
            <h2 className={styles.contact}>Contact Me</h2>
        </div>
            <Stack spacing={4}>
                <Input type="text" placeholder="Your Name" focusBorderColor={currentTheme.tertiary} />
                <Input type="email" placeholder="yourname@email.com" focusBorderColor={currentTheme.tertiary} />
                <Input type="tel" placeholder="Phone Number" focusBorderColor={currentTheme.tertiary} />
                <Textarea
                    placeholder="Message for me!"
                    resize="vertical"
                    focusBorderColor={currentTheme.tertiary}
                />
            </Stack>
        </div>
    )
}

export default Contact
