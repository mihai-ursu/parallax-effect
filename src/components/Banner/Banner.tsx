import { FunctionComponent } from "react";
import BannerProps from "./BannerProps";
import styles from "./Banner.module.scss";
import Image from "next/image";
import Parallax from "components/Parallax/Parallax";
import { BiReceipt, BiTimer } from "react-icons/bi";

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
        <div className={styles.cta}>
          <button className={styles.buttonPrimary}>
            <BiTimer className={styles.orderIcon} /> Order now
          </button>
          <button className={styles.buttonSecondary}>
            <BiReceipt className={styles.orderIcon} /> Browse Menu
          </button>
        </div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.imageRightWrapper}>
          <Parallax isEffectActive={true} offset={100}>
            <Image
              src="/images/soup.png"
              alt="Food"
              width={600}
              height={574}
              loading="eager"
            />
          </Parallax>
        </div>
        <Image
          src="/images/tomato-1.png"
          alt="Pepper"
          width={90}
          height={93}
          className={styles.tomatoOne}
          loading="eager"
        />
        <Image
          src="/images/tomato-2.png"
          alt="Pepper"
          width={90}
          height={93}
          className={styles.tomatoTwo}
          loading="eager"
        />
        <Image
          src="/images/leaf.png"
          alt="Green Leaf"
          width={100}
          height={102}
          className={styles.leaf}
          loading="eager"
        />
        <div className={styles.countertop} />
      </div>
    </section>
  );
};

export default Banner;
