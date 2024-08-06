import React from "react";
// import animation from "../assets/image/Loader Animation.json";
import { useLottie } from "lottie-react";
import animation from "../../assets/Nimages/LoaderAnimation.json";
export default function Loader() {
  const options = {
    animationData: animation,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className="w-96 flex justify-center items-center h-screen ">
      {View}
    </div>
  );
}
