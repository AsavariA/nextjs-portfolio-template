import Head from 'next/head'
import Work from '../Components/Work';
import metaImage from '../styles/meta-image.png'

const work = ({ currentTheme }) => {
    return (
        <>
            <Head>
                <title>Asavari Ambavane | Work</title>
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
            <div>
                <Work currentTheme={currentTheme}/>
            </div>
        </>
    )
}

export default work
