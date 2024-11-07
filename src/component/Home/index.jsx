import React from "react";
import Hero from "./Hero";
import Layout from "../Layout";
import Cards from "./Cards";
import Linebar from "./Linebar";
import Secondlast from "./secondlast";
import Descriptionboxs from "./Descriptionboxs";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Cards/>
        {/* <Linebar/>
        <Secondlast/>
        <Descriptionboxs/> */}
      </Layout>
    </div>
  );
};

export default Home;
