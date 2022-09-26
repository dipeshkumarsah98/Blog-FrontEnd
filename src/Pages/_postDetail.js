import React from "react";
// import { useParams } from "react-router-dom";
import Content from "../Components/postDetails/Content";
import { Header } from "../Components/postDetails/Header";

export const PostDetailPage = () => {
  // const { id } = useParams();
  return (
    <div className="container px-3 md:px-0">
      <Header />
      <Content />
    </div>
  );
};
