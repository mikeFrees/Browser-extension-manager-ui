import "./App.css";
import Header from "./Header";
import ExtensionList from "./ExtensionList";
import { StateProvider } from "./StateContextProvider";
import { useContext, useEffect } from "react";
import { StateContext } from "./StateContext";

function App() {
  return (
    <StateProvider>
      <AppContent />
    </StateProvider>
  );
}

function AppContent() {
  const { theme } = useContext(StateContext);
    useEffect(() => {
      if(theme == "dark") {
document.documentElement.classList.add("dark");
      } else {
document.documentElement.classList.remove("dark");
      }
    }
      );
  return (
    <main>
      <Header />
      <ExtensionList />
    </main>
  );
}

export default App;
