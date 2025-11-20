import "./ExtensionListHeader.css";
import { useContext } from "react";
import { StateContext } from "./StateContext";

function ExtensionListHeader() {
  const { filter, toggleFilter, theme } = useContext(StateContext);
  return (
    <div
      className={
        theme === "dark"
          ? "extensionListHeader darkMode"
          : "extensionListHeader"
      }
    >
      <h1
        className={
          theme === "dark"
            ? "darkMode"
            : ""
        }
      >
        Extensions List
      </h1>
      <div>
        <label
          className={
            filter == "all" ? "button--select active" : "button--select"
          }
        >
          <input
            type='radio'
            name='filter'
            value='all'
            checked={filter === "all"}
            onChange={(e) => toggleFilter(e.target.value)}
          />
          All
        </label>
        <label
          className={
            filter == "active" ? "button--select active" : "button--select"
          }
        >
          <input
            type='radio'
            name='filter'
            value='active'
            checked={filter === "active"}
            onChange={(e) => toggleFilter(e.target.value)}
          />
          Active
        </label>
        <label
          className={
            filter == "inactive" ? "button--select active" : "button--select"
          }
        >
          <input
            type='radio'
            name='filter'
            value='inactive'
            checked={filter === "inactive"}
            onChange={(e) => toggleFilter(e.target.value)}
          />
          Inactive
        </label>
      </div>
    </div>
  );
}

export default ExtensionListHeader;
