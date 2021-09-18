import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Routes from "./pages/routes";
import SearchContext from "./searchContext";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Header />
      <Routes />
    </SearchContext.Provider>
  );
};

export default App;
