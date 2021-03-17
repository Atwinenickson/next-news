import Head from 'next/head'
import { Toolbar } from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar/>
      <div className={styles.main}>
        <h1>Atwine Nickson</h1>


        <h2>Next.js News Apps</h2>

        <h3>You are one step away from the latest News</h3>
      </div>
    </div>
  );
}
