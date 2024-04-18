const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
import { Image } from "react-bootstrap";
import styles from "./floater.module.scss";

import { motion } from "framer-motion";
import { useEffect } from "react";

const Floater = ({name}) => {
  const objects = [1, 2, 3, 4];

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      document.querySelectorAll(".obj"+name).forEach((o, i) => {
       const speed = 1;
        const x = (window.innerWidth - e.pageX * speed) / 50;
        const y = (window.innerWidth - e.pageY * speed) / 50;

        o.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    });
  }, []);

  return (
    <motion.div className={styles.floater}>
      <CustomContainer className={styles.container}>
        {objects.map((i) => (
          <div key={i} className={`${styles.obj} ${styles[`obj_${i}`]}`}>
            <Image className={"obj"+name} src={`/images/fruits/${name}.png`} alt="lychee" fluid />
          </div>
        ))}
      </CustomContainer>
    </motion.div>
  );
};

export default Floater;
