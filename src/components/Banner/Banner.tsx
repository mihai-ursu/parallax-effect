import { FunctionComponent } from "react";
import BannerProps from "./BannerProps";
import styles from "./Banner.module.scss";

const Banner: FunctionComponent<BannerProps> = () => {
  return <section className={styles.wrapper}>Banner</section>;
};

export default Banner;
