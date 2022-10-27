import { FunctionComponent } from "react";
import TextImageProps from "./TextImageProps";
import styles from "./TextImage.module.scss";

const TextImage: FunctionComponent<TextImageProps> = () => {
  return <section className={styles.wrapper}>TextImage</section>;
};

export default TextImage;
