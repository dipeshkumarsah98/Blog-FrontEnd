import React from "react";
import { Posts } from "../Components/Posts";
import { Trending } from "../Components/Trending";

export const HomePage = () => {
  return (
    <div className="container">
      <Trending />
      <Posts />
    </div>
  );
};
