import { Stack, Input, Textarea } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = ({ currentTheme }) => {
    const [drawerVisible] = useMediaQuery("(max-width: 850px)")
    const FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdnXFxxj9KiFXRVRe1RweSbbrgouyzrQCxmdy3y7Kv5gOf3HA/formResponse'

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
      let data = {
          name: name,
          email: email,
          phone: phone,
          message: message
        }
      fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true)
            setName('')
            setEmail('')
            setPhone('')
            setMessage('')
          }
        })
      }

    return (
        <div style={{ width: !drawerVisible ? '40%' : '80%', margin: !drawerVisible ? '1rem auto' : '0.5rem auto', padding: !drawerVisible ? '1rem' : '0.5rem' }}>
            <div style={{ padding: !drawerVisible ? '1rem' : '0.5rem' }}>
                <h2 className={styles.contact}>Contact Me</h2>
            </div>
            {/* <form action={FORM_URL} method="POST"> */}
            <form>
                <Stack spacing={4}>
                    <Input type="text" name="name" value={name} placeholder="Your Name" focusBorderColor={currentTheme.tertiary} isRequired onChange={(e)=>{setName(e.target.value)}} />
                    <Input type="email" name="email" value={email} placeholder="yourname@email.com" focusBorderColor={currentTheme.tertiary} isRequired onChange={(e)=>{setEmail(e.target.value)}} />
                    <Input type="tel" name="phone" value={phone} placeholder="Phone Number" focusBorderColor={currentTheme.tertiary} isRequired onChange={(e)=>{setPhone(e.target.value)}} />
                    <Textarea
                        placeholder="Message for me!"
                        resize="vertical"
                        focusBorderColor={currentTheme.tertiary}
                        isRequired
                        name="email"
                        value={message}
                        onChange={(e)=>{setMessage(e.target.value)}} 
                    />
                    <div>
                        <div className={styles.submit} style={{ backgroundColor: currentTheme.tertiary, color: currentTheme.contrastText }}>
                            <button type="submit" onClick={(e)=>{handleSubmit(e)}}>Submit</button>
                        </div>
                    </div>
                </Stack>
            </form>
        </div>
    )
}

export default Contact
