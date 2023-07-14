import Head from 'next/head'
import styles from './page.module.css'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <div className={styles.stars}></div>
      <Head>
        <title>Relum</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Relum
        </h1>

        <p className={styles.description}>
          Our work revolves around cutting-edge AI models, redefining the boundaries of possibility. 
        </p>

        <p className={styles.description}>
          We're operating from Europe.
        </p>

        <p className={styles.description}>
          If the realm of advanced AI research intrigues you, consider reaching out to us at
          <a href="mailto:start@relum.ai" className={styles.link}>start@relum.ai</a>.
        </p>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}

