import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header onSearch={setSearch} />
      <Home search={search} />
    </>
  );
};

export default App;
