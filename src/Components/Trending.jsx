import React from "react";
import { Carousel } from "./Carousel";

export const Trending = () => {
  return (
    <div className="my-10">
      <h2 className="text-3xl font-mono mb-4 md:text-4xl lg:text-5xl">Trending</h2>
      <Carousel />
    </div>
  );
};
