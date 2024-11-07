import React from "react";
import Hero from "./Hero";
import Layout from "../Layout";
import Cards from "./Cards";
import Linebar from "./Linebar";
import Second from "./Second";
import Descriptionboxs from "./Descriptionboxs";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Cards />
        <Linebar />
        <Second />
        <Descriptionboxs />
      </Layout>
    </div>
  );
};

export default Home;
