import { Image } from "react-bootstrap";
import styles from "./products.module.scss";
import { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Floater from "./floater/floater";
// import { COLORS } from "@/constants/styles";

const ProductBanner = ({ data, length }) => {
  const { id, name, color, textColor, index } = data;

  const [style, setStyle] = useState({
    backgroundColor: color,
    position: "sticky",
    top: 0,
  });
  const initialOffsetTop = useRef();

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    container: ref.current,
  });

  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 ? 400 : -1200, index % 2 ? -1000 : 600]
    // [-170, 150]
  );

  useEffect(() => {
    const lastDiv = `banner_${length}`;
    initialOffsetTop.current = document.getElementById(lastDiv).offsetTop;

    window.addEventListener("scroll", () => {
      // const el = document.getElementById(`banner_${id}`);
      // if (el.offsetTop > el.offsetHeight) {
      //   el.querySelector(`#vid_${id}`).play();
      // }

      if (window.scrollY >= initialOffsetTop.current) {
        setStyle((prev) => ({ ...prev, position: "unset" }));
        // document.getElementById(lastDiv).querySelector("img").style.display =
        //   "none";
      } else {
        setStyle((prev) => ({ ...prev, position: "sticky" }));
        // document.getElementById(lastDiv).querySelector("img").style.display =
        //   "initial";
      }
    });
  }, [length]);

  return (
    <div
      className={`${styles.banner} bannerScroll`}
      id={`banner_${id}`}
      style={style}
      ref={ref}
    >
      <div className={styles.wrap}>
        {/* <object
          data="/assets/svg/splash2.svg"
          width="500"
          height="500"
          className={styles.splash}
          
        >
          {" "}
        </object> */}
        {/* <Image
          src="/assets/svg/splash2.svg"
          fluid
          alt="splash"
          className={styles.splash}
          style={{
            color:color,
          }}
        /> */}
        <Floater name={name} />
        <div className={styles.txt}>
          <motion.h2
            style={{
              scale: 1.7,
              translateX: scaleProgress,
              color: textColor,
            }}
          >
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
          </motion.h2>
          <motion.h2
            style={{
              scale: 1.7,
              translateX: scaleProgress,
              color: textColor,
            }}
            // ref={ref}
          >
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
          </motion.h2>
          <motion.h2
            style={{
              scale: 1.7,
              translateX: scaleProgress,
              color: textColor,
            }}
            // ref={ref}
          >
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
          </motion.h2>
          <motion.h2
            style={{
              scale: 1.7,
              translateX: scaleProgress,
              color: textColor,
            }}
            // ref={ref}
          >
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
          </motion.h2>
          <motion.h2
            style={{
              scale: 1.7,
              translateX: scaleProgress,
              color: textColor,
            }}
            // ref={ref}
          >
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
            &nbsp;
            <spn>{name}</spn>
          </motion.h2>
        </div>
        <motion.div
          className={styles.img}
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
            className={styles.bottle}
            src={`/images/flavours/${name}.png`}
            fluid
            alt="x"
            style={{
              filter: `drop-shadow(0px 0px 20px ${textColor})`,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const Products = () => {
  const banners = [
    {
      id: "1",
      name: "LYCHEE",
      textColor: "#ab0d26",
      color: "#f3e2ea",
    },
    {
      id: "2",
      name: "MANGO",
      textColor: "#ff8518",
      color: "#ffdcb4",
    },

    {
      id: "3",
      name: "STRAWBERRY",
      textColor: "#db1515",
      color: "#ffb7b7",
    },
  ];

  return (
    <div className={styles.holder}>
      {banners.map((b, i) => (
        <ProductBanner key={b.id} data={b} length={banners.length} index={i} />
      ))}
      {/* <div className={styles.q}>srgrs</div>
      <div className={styles.q}>srgrs</div> */}
    </div>
  );
};

export default Products;
