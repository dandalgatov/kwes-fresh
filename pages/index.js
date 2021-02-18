import Head from 'next/head'
import styles from '../styles/Home.module.css'
import kwesforms from 'kwesforms';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log('before init')
    kwesforms.init();
    console.log('after init')
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className="kwes-form" action="https://kwes.io/api/foreign/forms/mJHsXOYLXjmWLpxzOoR6">
      <label htmlFor="name">Your Name</label>
        <input type="text" name="name" rules="required|max:255" />
        
        <label htmlFor="number">Your number</label>
      <input type="number" name="number" rules="required|max:255"/>

      <button type="submit">Submit</button>
  </form> 
    </div>
  )
}
