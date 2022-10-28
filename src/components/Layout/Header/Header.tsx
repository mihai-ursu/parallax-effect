import styles from "./Header.module.scss";
import Logo from "assets/foodgo.svg";
import Image from "next/image";
import Link from "next/link";
import { BiSearch, BiCart, BiLogInCircle } from "react-icons/bi";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link href="/">
        <Image
          src={Logo}
          alt="FoodGo"
          width={200}
          height={50}
          loading="eager"
        />
      </Link>

      <nav className={styles.navigation}>
        <div className={styles.primaryNavigation}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/" className={styles.navLink}>
            Menu
          </Link>
          <Link href="/" className={styles.navLink}>
            About
          </Link>
          <Link href="/" className={styles.navLink}>
            Shop
          </Link>
        </div>

        <div className={styles.secondaryNavigation}>
          <BiSearch className={styles.icon} />
          <BiCart className={styles.icon} />
        </div>
      </nav>

      <button className={styles.logInButton}>
        <BiLogInCircle className={styles.logInIcon} /> Login
      </button>
    </header>
  );
};

export default Header;
