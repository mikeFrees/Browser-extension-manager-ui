import Image from "next/image";
import { Antonio, League_Spartan } from "next/font/google";
import styles from "../styles/Info.module.css";

const antonio = Antonio({ subsets: ["latin"] });
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function Info({data, section, setSection}) {
  let sectionMap = {
    Overview: data.overview,
    Structure: data.structure,
    Geology: data.geology,
  };
  let imageMap = {
    Overview: data.images.planet,
    Structure: data.images.internal,
    Geology: data.images.geology,
  };
  return (
    <div className={styles.info__container}>
      {section === "Geology" ? (
        <div className={styles.image__planet}>
          <Image
            src={imageMap["Overview"]}
            alt={`A pixel image of ${data.name}`}
            width={290}
            height={290}
            className={styles.image__planet__main}
          />
          <Image
            src={imageMap[section]}
            alt={`A pixel image of ${data.name}`}
            width={163}
            height={199}
            className={styles.image__planet__surface}
          />
        </div>
      ) : (
        <div className={styles.image__planet}>
          <Image
            src={imageMap[section]}
            alt={`A pixel image of ${data.name}`}
            width={290}
            height={290}
          />
          <Image
            src={imageMap[section]}
            alt={`A pixel image of ${data.name}`}
            width={163}
            height={199}
            className={styles.image__planet__surface}
            style={{ visibility: "hidden" }}
          />
        </div>
      )}

      <section className={styles.info}>
        <h2
          id='planet-name'
          className={`${antonio.className}`}
        >
          {data.name}
        </h2>
        <p
          id='information'
          className={`${leagueSpartan.className}`}
        >
          {sectionMap[section].content}
        </p>
        <p
          id='source'
          className={`${leagueSpartan.className}`}
        >
          Source :
          <a
            id='source-link'
            href={sectionMap[section].source}
            target='_blank'
            rel='noopener'
            className={`${leagueSpartan.className}`}
          >
            Wikipedia
            <Image
              src='/icons/icon-source.svg'
              alt=''
              width={12}
              height={12}
            />
          </a>
        </p>
        <ol id='sections'>
          <li key='overview'>
            <button
              type='button'
              onClick={() => setSection("Overview")}
              className={`${leagueSpartan.className} section__button${
                section === "Overview" ? " section__button--active" : ""
              }`}
            >
              Overview
            </button>
          </li>
          <li key='structure'>
            <button
              type='button'
              onClick={() => setSection("Structure")}
              className={` ${leagueSpartan.className} section__button${
                section === "Structure" ? " section__button--active" : ""
              }`}
            >
              Internal Structure
            </button>
          </li>
          <li key='Geology'>
            <button
              type='button'
              onClick={() => setSection("Geology")}
              className={` ${leagueSpartan.className} section__button${
                section === "Geology" ? " section__button--active" : ""
              }`}
            >
              Surface Geology
            </button>
          </li>
        </ol>
      </section>
    </div>
  );
}
