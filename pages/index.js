import Head from 'next/head'
import HomePage from '../Components/HomePage'
import metaImage from '../styles/meta-image.png'

export default function Home({ currentTheme }) {

  return (
    <div>
      <Head>
        <title>Asavari Ambavane</title>
        <link rel="icon" href="/A2.png" />
        <meta name="title" content="Asavari Ambavane" />
        <meta name="description" content="Hello, I am a full-stack web developer and this is my portfolio :)" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Asavari Ambavane" />
        <meta property="og:description" content="Hello, I am a full-stack web developer and this is my portfolio :)" />
        <meta property="og:image" content={metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Asavari Ambavane" />
        <meta property="twitter:description" content="Hello, I am a full-stack web developer and this is my portfolio :)" />
        <meta property="twitter:image" content={metaImage} />
      </Head>
      <HomePage currentTheme={currentTheme} />
    </div>
  )
}
