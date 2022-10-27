import { FunctionComponent } from "react";
import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import ParallaxProps from "./ParallaxProps";
import useIsomorphicLayoutEffect from "hooks/useIsomorphicLayoutEffect";
import styles from "./Parallax.module.scss";

const Parallax: FunctionComponent<ParallaxProps> = (props) => {
  const { children, offset = 50, isEffectActive } = props;
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      if (element)
        setElementTop(
          element.getBoundingClientRect().top + window.scrollY || window.scrollY
        );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  if (prefersReducedMotion || !isEffectActive) {
    return <>{children}</>;
  }

  return (
    <motion.div className={styles.parallax_wrapper} ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;
