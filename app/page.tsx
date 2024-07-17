import Image from "next/image";

import styles from './page.module.css';
import './page.module.css'

import Nav from './components/nav'

export default function Home() {
  return (
    <main className={styles.homepage}>
      <Image
        src='/logo_mates.png'
        width={400}
        height={400}
        alt='Logo of Mates'
        className={styles.logoHomeage}
      />
      
      <h1 className={styles.titlesHomepage} >
        Je suis sur la page HOME
      </h1>
      <a href="/configuration" className={styles.buttonHomepage}>Coucou</a>
    <Nav/>
    </main>
  );
}
