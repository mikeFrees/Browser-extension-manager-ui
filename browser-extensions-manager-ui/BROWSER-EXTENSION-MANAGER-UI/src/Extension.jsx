import "./Extension.css";
import { useContext } from "react";
import { StateContext } from "./StateContext";

function Extension({ logo, name, description, isActive, id }) {
  const { toggleActive, removeExtension, theme } = useContext(StateContext);
  const logoUrl = `${import.meta.env.BASE_URL}${logo}`;
  return (
    <article className={ theme === "dark" ? "darkMode" : ""}>
      <img
        src={logoUrl}
        alt={name + " logo"}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={"controls"}>
        <button
          className={"button--remove"}
          onClick={() => removeExtension(id)}
        >
          Remove
        </button>
        <button
          className={isActive ? "button--active" : "button--active inactive"}
          key={name}
          onClick={() => toggleActive(id)}
        >
          <div className={"dot"}></div>
        </button>
      </div>
    </article>
  );
}

export default Extension;
