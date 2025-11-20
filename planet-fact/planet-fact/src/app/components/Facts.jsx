import { Antonio, League_Spartan } from "next/font/google";
import styles from "../styles/Facts.module.css";

const antonio = Antonio({ subsets: ["latin"] });
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function Facts(props) {
  return (
    <aside className={styles.facts}>
      <div
        className={styles.fact__container}
        id='rotation'
      >
        <h3 className={`${leagueSpartan.className}`}>Rotation time</h3>
        <p
          id='rotation-value'
          className={`${antonio.className} `}
        >
          {props.data.rotation}
        </p>
      </div>
      <div
        className={styles.fact__container}
        id='revolution'
      >
        <h3 className={`${leagueSpartan.className}`}>Revolution time</h3>
        <p
          id='revolution-value'
          className={`${antonio.className}`}
        >
          {props.data.revolution}
        </p>
      </div>
      <div
        className={styles.fact__container}
        id='radius'
      >
        <h3 className={`${leagueSpartan.className}`}>Radius</h3>
        <p
          id='radius-value'
          className={`${antonio.className}`}
        >
          {props.data.radius}
        </p>
      </div>
      <div
        className={styles.fact__container}
        id='temperature'
      >
        <h3 className={`${leagueSpartan.className}`}>Average temp.</h3>
        <p
          id='temperature-value'
          className={`${antonio.className}`}
        >
          {props.data.temperature}
        </p>
      </div>
    </aside>
  );
}
