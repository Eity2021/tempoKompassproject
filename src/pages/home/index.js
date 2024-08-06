import React from "react";
import Background from "./Background";
import Desking from "./Desking";
import Newsletter from "./Newsletter";
import Services from "./Services";
import Partners from "./Partners";
import NumbersOf from "./NumbersOf";
import KompassIntegration from "./KompassIntegration";

export default function Home() {
  return (
    <div>
      <Background />
      <Services />
      <Desking />
      <NumbersOf />
      <Partners />
      <KompassIntegration />
      <Newsletter />
    </div>
  );
}
