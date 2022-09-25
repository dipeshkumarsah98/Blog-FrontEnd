import React from "react";
import { CustomBreadcrumb } from "./CustomBreadcrumb";

export const Header = () => {
  return (
    <div>
      <CustomBreadcrumb />
      <h1
        className="text-lg my-3 font-openSans
         font-bold md:text-2xl lg:text-4xl xl:text-5xl"
      >
        How to get canvas for free...
      </h1>
    </div>
  );
};
