import React from "react";
import Hero from "./Hero";
import Layout from "../Layout";
import Cards from "./Cards";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Cards/>
      </Layout>
    </div>
  );
};

export default Home;
