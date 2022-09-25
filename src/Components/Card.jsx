import React from "react";
import Pic from "../img/logo/logo-color.png";
import { Card as PostCard } from "flowbite-react";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <Link to={`/post/876`}>
      <div className="max-w-sm">
        <PostCard
          imgAlt="PostCard"
          imgSrc={Pic}
          className="hover:cursor-pointer"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </PostCard>
      </div>
    </Link>
  );
};
