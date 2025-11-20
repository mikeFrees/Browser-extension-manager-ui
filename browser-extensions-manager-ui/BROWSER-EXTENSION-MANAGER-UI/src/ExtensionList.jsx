import "./ExtensionList.css";
import Extension from "./Extension";
import ExtensionListHeader from "./ExtensionListHeader";
import { useContext } from "react";
import { StateContext } from "./StateContext";

function ExtensionList() {
  const { extensions, theme, filter } = useContext(StateContext);

  let filtered = [...extensions];

  if (filter === "active") {
    filtered = filtered.filter((item) => item.isActive);
  }

  if (filter === "inactive") {
    filtered = filtered.filter((item) => !item.isActive);
  }

  const list = filtered.map((item) => (
    <Extension
      key={item.id}
      className={theme === "dark" ? "darkMode" : ""}
      {...item}
    />
  ));

  return (
    <section>
      <ExtensionListHeader className={theme === "dark" ? "darkMode" : ""} />
      {list}
    </section>
  );
}

export default ExtensionList;
