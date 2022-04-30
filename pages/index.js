import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="El mejor blog del mundo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav className={styles.navbar}>
        <span>
          Blog de San Lorenzo
        </span>
      </nav>

      
    
    </div>
  )
}
