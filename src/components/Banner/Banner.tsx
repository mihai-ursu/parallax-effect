import { FunctionComponent } from "react";
import BannerProps from "./BannerProps";
import styles from "./Banner.module.scss";
import Image from "next/image";
import Parallax from "components/Parallax/Parallax";

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
          nisi obcaecati amet nam adipisci.
        </p>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.imageRightWrapper}>
          <Parallax isEffectActive={true} offset={100}>
            <Image src="/images/soup.png" alt="Food" width={600} height={574} />
          </Parallax>
        </div>
        <div className={styles.countertop} />
      </div>
    </section>
  );
};

export default Banner;
