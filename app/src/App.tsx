import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Routes from "./pages/routes";
import SearchContext from "./searchContext";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </SearchContext.Provider>
  );
};

export default App;
