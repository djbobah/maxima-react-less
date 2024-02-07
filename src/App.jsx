import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";
import Catalog from "./pages/Catalog";
import Menu from "./components/Menu/Menu";
import Layout from "./components/Layout";
import { useState } from "react";

export const Ctx = createContext({});

export default () => {
  const [pokemons, setPokemons] = useState([]);
  return (
    <Ctx.Provider value={{ pokemons, setPokemons }}>
      <Layout>
        <Menu />
      </Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/page/:name" element={<Page />} />
      </Routes>
    </Ctx.Provider>
  );
};
