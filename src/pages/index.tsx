import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <section className={styles.topBanner}>
          <div className={styles.textLeft}></div>
          <div className={styles.imageRight}></div>
        </section>
      </main>
    </div>
  );
}
