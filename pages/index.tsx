import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import AppContainer from '../src/AppContainer';
import Header from '../src/Header';

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>A plain TODO List</title>
        <meta name="description" content="A plain TODO List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AppContainer />
    </main>
  );
};

export default Home;
