import styles from "../styles/Header.module.css";
import { Antonio, League_Spartan } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"] });
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export default function Header({ selectedPlanet, setSelectedPlanet }) {
  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  return (
    <header
      id='header'
      className={`${antonio.className} ${styles.header}`}
    >
      <h1 className={styles.header__title}>The planets</h1>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          {planets.map((planet) => (
            <li
              key={planet}
              className={styles.header__item}
            >
              <button
                type='button'
                onClick={() => setSelectedPlanet(planet)}
                className={
                  selectedPlanet === planet
                    ? `${styles.header__button} ${
                        styles["header__button--active"]
                      } ${styles["header__button--" + planet.toLowerCase()]} ${
                        leagueSpartan.className
                      }`
                    : `${styles.header__button}
                       ${styles["header__button--" + planet.toLowerCase()]} ${
                        leagueSpartan.className
                      }`
                }
              >
                {planet}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
