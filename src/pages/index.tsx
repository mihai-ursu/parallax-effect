import Banner from "components/Banner/Banner";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Banner />
        <div className={styles.space} />
      </main>
    </div>
  );
}
