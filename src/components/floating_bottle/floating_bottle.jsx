import { Image } from "react-bootstrap";
import styles from "./floating_bottle.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingBottle = ({ scrollRef, width }) => {
  console.log(scrollRef);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    container: scrollRef.current,
    offset: ["start end", "start start"],
    target: scrollRef,
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    container: scrollRef.current,
    offset: ["start start", "end start"],
    target: scrollRef,
  });
  // const { scrollYProgress } = useScroll({container:scrollRef.crrent,offset:["start end", "end end"]});

  const xPrgogress = useTransform(
    scrollYProgress1,
    [0.2, 0.8],
    [0,  0]
  );

  const xPrgogress2 = useTransform(scrollYProgress2, [0, 1], [0, -1000]);

  return (
    <div className={styles.floater}>
      <motion.div
        animate={{ y: [0, 1300, 850, 1000], rotateZ: [0, 40, 0, -20, 0] }}
        transition={{
          // ease: "easeInOut",
          // bounce: 1,
          duration: 1.2,
        }}
      >
        <div className={styles.wrap}>
          <motion.div
            style={{
              // translateX: xPrgogress,
              translateY: xPrgogress2,
            }}
            animate={["float"]}
            whileHover={["rotate", "grow"]}
            whileTap={["rotate", "grow"]}
            variants={{
              float: {
                y: [0, 10, 0],
                x: [0, 10, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              },
              grow: {
                scale: 1.05,
              },
              rotate: {
                rotate: [null, -5, 5, 0],
                transition: {
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                },
              },
            }}
          >
            <Image
              src="/bottle.png"
              alt="bottle"
              className={styles.bottle}
              fluid
            />
          </motion.div>

          <motion.div
            className={styles.splash}
            animate={{
              scale: [0, 3, 0],
              x: [0, 150],
              y: [0, -120, 0],
              rotate: [0, 80, 80, 100],
            }}
            transition={{
              ease: "easeInOut",
              bounce: 1,
              duration: 0.7,
              delay: 0.5,
            }}
          >
            <Image src="/assets/svg/splash1.svg" alt="x" fluid />
          </motion.div>

          <motion.div
            className={styles.splash}
            animate={{
              scale: [0, 0.5, 0],
              x: [0, 50],
              y: [0, -200, 0],
              rotate: [0, 80, 80, 180],
            }}
            transition={{
              ease: "easeInOut",
              bounce: 1,
              duration: 1,
              delay: 0.5,
            }}
          >
            <Image src="/assets/svg/splash1.svg" alt="x" fluid />
          </motion.div>

          <motion.div
            className={`${styles.splash} ${styles.left}`}
            animate={{
              scale: [0, 3.5, 0],
              x: [0, -220],
              y: [0, -120, 0],
              rotate: [0, -80, -180],
            }}
            transition={{
              ease: "easeInOut",
              bounce: 1,
              duration: 0.7,
              delay: 0.5,
            }}
          >
            <Image src="/assets/svg/splash1.svg" alt="x" fluid />
          </motion.div>

          <motion.div
            className={styles.splash}
            animate={{
              scale: [0, 0.7, 0],
              x: [0, -250],
              y: [0, -100, 0],
              rotate: [0, -80, -180],
            }}
            transition={{
              ease: "easeInOut",
              bounce: 1,
              duration: 1.1,
              delay: 0.5,
            }}
          >
            <Image src="/assets/svg/splash1.svg" alt="x" fluid />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingBottle;
