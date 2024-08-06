import React from "react";

import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";


export default function Layout({ children }) {
  return (
  
    <div className="w-full">
      <Navigation />
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
