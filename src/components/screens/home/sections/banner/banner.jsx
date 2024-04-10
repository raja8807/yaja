import FloatingBottle from "@/components/floating_bottle/floating_bottle";
import styles from "./banner.module.scss";
import TagLine from "@/components/tagLine/tag_line";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import CustomContainer from "@/components/ui/custom_container/custom_container";

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
        // onViewportEnter={() => {
        //   scrollRef.current.scrollIntoView();
        // }}
      >
        <CustomContainer>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          eum eos, sunt quae excepturi omnis eius ab dolor vel pariatur
          praesentium, repudiandae incidunt tenetur neque perferendis labore
          exercitationem quam! Odio possimus enim illum impedit recusandae,
          veniam rem iusto nobis temporibus tempora cupiditate natus, veritatis
          autem nulla minima ad libero est culpa harum similique porro? Veniam,
          nulla dignissimos! Ipsam delectus iure provident sed explicabo velit
          tempore quo ullam, esse aut ea nobis ducimus vitae deleniti debitis
          inventore aliquam pariatur tempora magnam recusandae fuga at. Earum
          tenetur rerum adipisci ipsa cumque corporis ad non culpa quasi
          mollitia excepturi ducimus quo enim, doloribus sed quae at facilis
          quam vero sapiente praesentium molestiae ab recusandae libero.
          Impedit, necessitatibus odio odit quo, maxime eum adipisci nihil
          accusantium itaque illo rem magni quos dolore? Dignissimos optio nam
          et, adipisci doloribus nobis. Doloremque nulla quam architecto
          tempore, impedit unde beatae cupiditate aliquid, maiores iste
          consequatur nisi, minima velit dolorem incidunt aut quis voluptatem!
          Adipisci nisi quos itaque vel temporibus. Illum sed a dolorem, id
          beatae voluptate ad maxime cupiditate mollitia sunt voluptatibus
          provident. Ipsum, ducimus impedit dolore expedita culpa non aut.
          Nesciunt fugit iure voluptatem tempore vel nihil distinctio atque
          ipsam deleniti, doloribus ullam voluptates accusamus expedita
          perspiciatis aperiam eos doloremque harum molestias quo quas aliquam
          illo, sequi hic. Quis tempora nostrum eius tenetur, ullam eaque beatae
          nam inventore aliquid sapiente expedita, harum itaque quibusdam libero
          animi numquam, facere fugit quidem culpa possimus debitis. Nemo illum
          sequi aperiam vel, ipsa nobis ipsum aliquam perspiciatis laudantium
          sint molestiae harum repellendus laborum laboriosam obcaecati, nihil
          tempora praesentium in magni! Cupiditate dolor vitae assumenda
          deserunt aliquam aperiam soluta iusto. Facere odit obcaecati
          perspiciatis voluptatum architecto vel ullam impedit, omnis rerum
          temporibus et sapiente, expedita earum, laborum illum officiis alias.
          Culpa at perferendis vero sit autem officia dolores deleniti
          doloremque asperiores earum, voluptatum impedit aliquid dolorem
          similique. Tempore fugit quaerat veritatis sunt! Repudiandae
          voluptatem, nesciunt alias suscipit consequuntur accusamus voluptate
          porro ipsum. Ut tempore sequi ullam alias nemo voluptates excepturi
          tempora minima voluptas aspernatur adipisci, perferendis voluptatum
          culpa quas sit saepe laboriosam unde neque accusantium eveniet.
          Deleniti sed, minima quidem repellendus doloribus quisquam autem
          pariatur ex dolore magnam reiciendis itaque aliquam? Blanditiis fugiat
          non fuga maiores? Illum reiciendis distinctio pariatur. Magni
          asperiores quis aliquam explicabo maiores, iste voluptatum illum, sunt
          repellat amet temporibus excepturi, quidem iure quae sed quo aperiam
          neque totam quaerat. Laboriosam quaerat aliquid voluptatibus dolorum
          odio quidem neque, veritatis sint recusandae voluptatem repellendus
          dignissimos cupiditate incidunt nisi modi beatae reiciendis labore
          cumque. Dolor reprehenderit inventore vero eius ea sit itaque at
          perferendis molestias eum? Ea rerum possimus quisquam sequi eaque,
          alias quasi explicabo officiis nisi nulla ipsa suscipit pariatur
          facere, tempora voluptatum sapiente in fugiat a blanditiis natus
          cupiditate! Illo odit enim mollitia placeat a aliquam non eum! Vero
          cupiditate magnam sit? Quos voluptatum non nam magnam! Corporis,
          eveniet. Modi dicta minima fuga qui eveniet odit ratione nulla earum
          soluta. Enim, blanditiis. Repudiandae reprehenderit in sint debitis
          itaque quibusdam deleniti vitae unde minima ullam facere, veritatis
          explicabo eos fuga assumenda nam saepe nihil dignissimos quas
          repellat. Consectetur voluptas consequuntur adipisci fuga eos suscipit
          aspernatur incidunt recusandae rem vero, praesentium maiores alias
          culpa exercitationem nihil temporibus cum voluptatem eius modi? Nisi
          laudantium doloribus nesciunt provident excepturi facere hic eos fugit
          laborum soluta cum eligendi vero officiis, minima ipsum possimus
          laboriosam porro tenetur corporis? Perferendis, id consequatur maiores
          placeat itaque veniam asperiores ducimus quidem pariatur voluptatum
          optio, aut sequi cum, molestiae unde reiciendis. Natus veniam omnis
          culpa hic minus officia ea! Eos perspiciatis earum ab magnam velit,
          tempora necessitatibus soluta magni similique maxime, suscipit
          deleniti, mollitia dolores corporis! Ab laboriosam voluptas
          praesentium molestias? Molestias aliquid maiores est ratione, deleniti
          consequatur cum vitae perferendis nisi quis assumenda iste doloremque
          consequuntur. Delectus omnis eos, fugit, dignissimos ratione accusamus
          recusandae eaque ipsam molestiae beatae id tempora, obcaecati saepe
          alias dolor dolorum. Velit eligendi itaque fuga cum autem sed nemo
          natus dolor atque dolores corporis at veniam quidem maxime facilis
          eaque nesciunt, in voluptatum vitae aspernatur nisi! Consectetur
          recusandae, cupiditate illum maiores inventore voluptatum odio
          voluptate corrupti asperiores, velit id neque odit iusto vel impedit
          laborum voluptas delectus, veniam error. Doloremque, iusto quasi nihil
          consequuntur sequi optio! Expedita voluptates eaque laudantium
          placeat, excepturi dicta! Facilis itaque quisquam minus quasi, eos
          nemo quis tenetur cum, consectetur quidem placeat sit autem atque
          dolore ipsam, harum nesciunt voluptates laboriosam perspiciatis vel
          magni mollitia. Cum, fugiat molestias excepturi veritatis molestiae
          optio? Suscipit at mollitia placeat reprehenderit ea quidem nostrum
          voluptatem tempora, tempore autem a quo iste cumque dignissimos
          voluptate veniam corrupti aut omnis libero dolor perferendis
          obcaecati! Impedit rem dolor dolores sequi! Obcaecati, dolores. Velit
          distinctio in atque modi excepturi, deserunt nihil? Animi perferendis
          vel obcaecati expedita sint eos at natus et ex. Esse dolorem neque
          repellendus ut minus maxime quia, non labore officiis reprehenderit
          adipisci quis provident fugit, quasi alias. Provident exercitationem,
          aliquam earum dolorem in dolorum eius deserunt unde suscipit nisi id
          molestiae quos eaque quae quis quaerat voluptatem amet similique ab
          nam esse temporibus fuga ad? Vero ipsa quo nemo voluptates a earum,
          ipsam recusandae harum iste necessitatibus aut. Placeat necessitatibus
          dignissimos quas culpa dolorem velit eligendi doloremque vero
          veritatis maiores illo quos amet corrupti modi debitis accusantium
          consequuntur, perferendis quis tenetur. Adipisci at sit inventore
          possimus ad eos praesentium enim quod, impedit facilis voluptatibus
          ipsam dolorum rem cumque maxime fugiat pariatur illo numquam veniam
          similique! Veniam impedit laborum, natus dignissimos nulla excepturi
          molestias labore obcaecati porro fuga, officiis esse eum omnis velit
          repellat maxime, magnam ipsum placeat accusamus. Repudiandae, quas.
          Magnam consectetur corrupti eaque sit aliquam deserunt magni quod,
          debitis ipsam veniam vel facere vitae commodi exercitationem! Eius
          assumenda atque adipisci quos, quisquam, et architecto deserunt optio,
          aut reiciendis voluptate repellat? Saepe molestias maiores dolore
          sequi voluptatum ut rerum. Saepe, laborum, enim consectetur vel,
          magnam architecto similique iusto reprehenderit ipsa voluptatum
          voluptatibus? Optio corrupti saepe totam praesentium, ratione cum
          possimus aliquid magnam quae dolore labore unde sunt tenetur nostrum
          esse vitae consectetur perferendis eligendi debitis fuga provident
          facilis delectus quis aperiam! Molestiae, magni similique.
        </CustomContainer>
      </motion.section>
    </div>
  );
};

export default BannerSection;
