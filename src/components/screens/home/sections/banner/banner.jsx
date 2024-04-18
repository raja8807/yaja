import FloatingBottle from "@/components/floating_bottle/floating_bottle";
import styles from "./banner.module.scss";
import TagLine from "@/components/tagLine/tag_line";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import AboutSection from "./about/about";
import Scroll from "./scroll/scroll";

const BannerSection = () => {
  const bubbles = [];

  for (let i = 1; i <= 100; i++) {
    bubbles.push(i);
  }

  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: scrollRef.current,
    offset: ["start end", "start center"],
    target: scrollRef,
  });

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className={styles.hero}>
      {width && <FloatingBottle scrollRef={scrollRef} width={width} />}
      <section className={styles.banner}>
        <Scroll/>
        <TagLine />
        <div className={styles.bg}>
          <div className={styles.container}>
            {bubbles.map((b) => (
              <div
                key={`${b}b`}
                className={`${styles.circleContainer} ${
                  styles[`circleContainer${b % 2}`]
                }`}
              >
                <div
                  className={`${styles.circle} ${styles[`circle${b % 2}`]}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.blob} ${styles.blob1}`}>
          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M43.8,-61C56.2,-51.2,65.5,-37.7,69.3,-23.2C73.2,-8.6,71.6,7.1,67.8,23.1C64.1,39.1,58.2,55.6,46.5,63.4C34.9,71.3,17.4,70.7,1.2,69.1C-15.1,67.4,-30.1,64.8,-45,58C-59.8,51.1,-74.3,40,-77.2,26.2C-80.2,12.4,-71.5,-4,-63.4,-17.9C-55.2,-31.8,-47.4,-43.3,-37,-53.7C-26.5,-64.1,-13.2,-73.5,1.2,-75.2C15.7,-76.9,31.3,-70.8,43.8,-61Z"
            transform="translate(100 100)"
          />
        </svg> */}

          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#000000"
              d="M37.6,-59.9C47.8,-59.2,54.7,-47.3,62.4,-35.5C70.1,-23.7,78.8,-11.8,70.8,-4.6C62.8,2.6,38,5.1,31.4,18.9C24.8,32.7,36.3,57.7,34,71.3C31.8,84.9,15.9,87.2,0.2,86.7C-15.4,86.3,-30.9,83.3,-45.2,76.6C-59.4,70,-72.5,59.7,-71.2,46.3C-69.9,32.9,-54.1,16.5,-46.8,4.3C-39.4,-8,-40.4,-15.9,-36.7,-20.7C-33.1,-25.5,-24.9,-27.1,-18,-29.8C-11.1,-32.4,-5.5,-36,4.1,-43C13.7,-50.1,27.4,-60.6,37.6,-59.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className={`${styles.blob} ${styles.blob2}`}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#000000"
              d="M33.3,-47.5C34.8,-44.8,21.7,-23.8,19.3,-11.1C16.8,1.7,24.9,6.2,26.1,10.4C27.4,14.5,21.8,18.4,16.2,22.6C10.7,26.9,5.4,31.5,1.3,29.7C-2.7,27.9,-5.4,19.5,-13.1,16C-20.8,12.5,-33.4,13.7,-44.3,7.9C-55.1,2.1,-64.1,-10.8,-62.8,-22.1C-61.5,-33.4,-49.9,-43.1,-37.7,-42.3C-25.6,-41.6,-12.8,-30.3,1.6,-32.5C15.9,-34.7,31.9,-50.2,33.3,-47.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>
      <motion.section
        className={styles.about}
        ref={scrollRef}
      >
          <AboutSection/>
      </motion.section>
    </div>
  );
};

export default BannerSection;
