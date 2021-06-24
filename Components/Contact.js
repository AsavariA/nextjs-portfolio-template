import { Stack, Input, Textarea, useToast } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import { useState } from 'react'
import styles from '../styles/Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn, faMediumM, } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'

const Contact = ({ currentTheme }) => {
  const [drawerVisible] = useMediaQuery("(max-width: 850px)")
  const toast = useToast()
  // const FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdnXFxxj9KiFXRVRe1RweSbbrgouyzrQCxmdy3y7Kv5gOf3HA/formResponse'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const iconStyles = {
    backgroundColor: currentTheme.tertiary,
    color: '#101010',
    boxShadow: currentTheme.boxShadow,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')

    toast({
      description: "You reached us!",
      status: "success",
      duration: 5000,
      isClosable: true,
    })

    // console.log(JSON.stringify(data))
    // console.log(data)

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
      <form onSubmit={(e) => { handleSubmit(e) }} className={styles.form} style={{ borderColor: currentTheme.text, backgroundColor: currentTheme.text === '#363537' ? '#fafafa' : 'transparent' }}>
        <Stack spacing={4}>
          <Input type="text" name="name" value={name} placeholder="Your Name" focusBorderColor={currentTheme.tertiary} isRequired autoComplete="off" onChange={(e) => { setName(e.target.value) }} />
          <Input type="email" name="email" value={email} placeholder="yourname@email.com" focusBorderColor={currentTheme.tertiary} autoComplete="off" isRequired onChange={(e) => { setEmail(e.target.value) }} />
          <Input type="tel" name="phone" value={phone} placeholder="Phone Number" focusBorderColor={currentTheme.tertiary} autoComplete="off" isRequired onChange={(e) => { setPhone(e.target.value) }} />
          <Textarea
            placeholder="Message for me!"
            resize="vertical"
            focusBorderColor={currentTheme.tertiary}
            isRequired
            name="email"
            value={message}
            autoComplete="off"
            onChange={(e) => { setMessage(e.target.value) }}
          />
          <div>
            <div className={styles.submit} style={{ backgroundColor: currentTheme.tertiary }}>
              <button type="submit">Submit</button>
            </div>
          </div>
        </Stack>
      </form>

      <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
        <Link href="mailto:ambavaneasavari@gmail.com"><a>ambavaneasavari@gmail.com</a></Link>
      </div>
      <div className={styles.socialIconDiv}>
        <div className={styles.socialIcon} style={iconStyles}>
          <Link href="https://github.com/AsavariA"><a><FontAwesomeIcon icon={faGithubAlt} /></a></Link>
        </div>
        <div className={styles.socialIcon} style={iconStyles}>
          <Link href="https://www.linkedin.com/in/asavariambavane/"><a><FontAwesomeIcon icon={faLinkedinIn} /></a></Link>
        </div>
        <div className={styles.socialIcon} style={iconStyles}>
          <Link href="https://ambavaneasavari.medium.com/"><a><FontAwesomeIcon icon={faMediumM} /></a></Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
