import React from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export const CustomBreadcrumb = () => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="/" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item>Title goes here</Breadcrumb.Item>
    </Breadcrumb>
  );
};
