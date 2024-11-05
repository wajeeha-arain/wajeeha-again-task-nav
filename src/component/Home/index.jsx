import React from "react";
import Hero from "./Hero";
import Layout from "../Layout";
import Cards from "./Cards";
import Linebar from "./Linebar";
import Secondlast from "./secondlast";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Cards/>
        <Linebar/>
        <Secondlast/>
      </Layout>
    </div>
  );
};

export default Home;
