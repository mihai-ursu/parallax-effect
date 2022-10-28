import { FunctionComponent } from "react";
import BannerProps from "./BannerProps";
import styles from "./Banner.module.scss";
import Image from "next/image";

const Banner: FunctionComponent<BannerProps> = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.textLeft}>
        <div className={styles.title}>
          <h1 className={styles.titleTop}>Order your</h1>
          <h1 className={styles.titleBottom}>favourite food</h1>
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit at libero animi, quis hic delectus aut illo, aspernatur
          nisi obcaecati amet nam adipisci, harum fuga id aperiam earum
          molestias. Odit? At, placeat deleniti? Cumque, tenetur.
        </p>
      </div>
      {/* <div className={styles.imageRight}></div> */}
      <div className={styles.countertop}>
        {/* <img src="/images/seamless-countertop.jpg" alt="Countertop" /> */}
      </div>
    </section>
  );
};

export default Banner;
