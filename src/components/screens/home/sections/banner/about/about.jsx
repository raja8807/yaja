import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./about.module.scss";
import { Image } from "react-bootstrap";

const AboutSection = () => {
  const labels1 = [
    {
      id: 1,
      text: "Real, Balanced ingredients that taste great.",
      style:{transform: "scaleX(-1) scaleY(-1) rotate(90deg)", }
    },
    {
      id: 2,
      text: "Make it yours with whole food boosts.",
      style:{transform: "scaleX(-1)  rotate(50deg)", }
    },
    {
      id: 3,
      text: "Make it yours with whole food boosts.",
      style:{transform: "scaleX(-1)  rotate(90deg)", }
    },
  ];

  const labels2 = [
    {
      id: 4,
      text: "Fresh-squeezed juices.",
      style:{transform: "scaleX(-1) rotate(-90deg)", }
    },
    {
      id: 5,
      text: "Our juice are completely free of preservations.",
      style:{transform: "rotate(50deg)", }
    },
    {
      id: 6,
      text: "No added sugar or artificial sweetener.",
      style:{transform: "rotate(90deg)", }
      
    },
  ];

  return (
    <section className={styles.aboutSection}>
      <CustomContainer style={{ height: "100%" }}>
        <div className={styles.bg} />
        <div className={styles.labels}>
          <div className={`${styles.labelWrap} ${styles.left}`}>
            {labels1.map((l) => (
              <div key={`lab_${l.id}`}>
                <p>{l.text}</p>
                <Image
                  className={styles.arrowL}
                  src={`/icons/arrow.png`}
                  alt={l.id}
                  fluid
                  style={l.style || {}}
                />
                <Image src={`/icons/${l.id}.webp`} alt={l.id} />
              </div>
            ))}
          </div>

          <div className={styles.labelWrap}>
            {labels2.map((l) => (
              <div key={`lab_${l.id}`}>
                <Image src={`/icons/${l.id}.webp`} alt={l.id} />
                <Image
                  className={styles.arrowR}
                  src={`/icons/arrow.png`}
                  alt={l.id}
                  fluid
                  style={l.style || {}}
                />
                <p>{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutSection;
