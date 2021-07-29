import Head from 'next/head'
import HomePage from '../Components/HomePage'
import HeadTag from '../Components/HeadTag'

export default function Home({ currentTheme }) {

  return (
    <div>
      <HeadTag page='Home'/>
      <HomePage currentTheme={currentTheme} />
    </div>
  )
}
