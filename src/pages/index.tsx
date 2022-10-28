import Banner from "components/Banner/Banner";
import Layout from "components/Layout/Layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <main>
        <Banner />
        <div className={styles.space} />
      </main>
    </Layout>
  );
}
