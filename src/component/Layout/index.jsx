import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Linebar from "../Home/Linebar";
import Secondlast from "../Home/secondlast";
import Descriptionboxs from "../Home/Descriptionboxs";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
