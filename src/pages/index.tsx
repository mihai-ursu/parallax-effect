import Banner from "components/Banner/Banner";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Banner />
      </main>
    </div>
  );
}
