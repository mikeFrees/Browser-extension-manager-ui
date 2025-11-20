import { useState } from "react";
import { StateContext } from "./StateContext";
import data from "./assets/data/data.json";

export function StateProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState("all");
  const [extensions, setExtensions] = useState(() =>
    data.map((item, index) => ({ ...item, id: index })),
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleFilter = (filter) => {
    setFilter(filter);
  };

  const toggleActive = (id) => {
    setExtensions((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item,
      ),
    );
  };

  const removeExtension = (id) => {
    setExtensions((prev) => prev.filter((item) =>item.id !== id));
  };

  const value = {
    theme,
    toggleTheme,
    filter,
    toggleFilter,
    extensions,
    setExtensions,
    toggleActive,
    removeExtension,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}
