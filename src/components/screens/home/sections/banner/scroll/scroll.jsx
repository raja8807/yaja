const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");

import { motion } from "framer-motion";
import styles from "./scroll.module.scss";
const ScrollerSection = () => {
  const aboutData = [
    {
      text: "Refreshing Drink",
    },
    {
      text: "All Natural",
    },
    {
      text: "Rich Flavoured",
    },
    {
      text: "Lorem Ipsum",
    },
    {
      text: "Doleres New",
    },
    {
      text: "Rich Flavoured",
    },
  ];

  const data = aboutData;

  return (
    <motion.div
      className={styles.scroll}
      initial={{
        scaleX: 0,
        // transformOrigin:'right',
      }}
      animate={{
        scaleX: [0, 1],
        scaleY: [0, 1],
        // transformOrigin:'right',
        transition: {
          delay: 0.5,
        },
      }}
    >
      <div className={styles.scrollHolder}>
        {data.map((d, i) => {
          return (
            <div key={`scr_${i}`} className={styles.scrItem}>
              <span>✤</span>
              <div>
                <p>{d.text.toUpperCase()}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.scrollHolder}>
        {data.map((d, i) => {
          return (
            <div
              key={`scr_${i}`}
              className={styles.scrItem}
              onClick={() => {
                if (d.id) {
                  router.push(`/services?s=${d.id}`);
                }
              }}
            >
              <span>✤</span>
              <div>
                <p>{d.text.toUpperCase()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ScrollerSection;
