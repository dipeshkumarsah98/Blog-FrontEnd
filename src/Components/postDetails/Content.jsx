import React from "react";
import Image from "../../img/logo/logo.jpeg";

const Content = () => {
  return (
    <div className="space-y-2">
      <img
        src={Image}
        alt="content"
        className="bg-content rounded-lg lg:h-[70vh] lg:w-screen"
      />
      <h2 className="font-roboto font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">
        First Step
      </h2>
      <p className="text-justify font-medium font-Poppins lg:text-xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto
        molestias architecto maiores dicta cupiditate, officiis beatae repellat,
        nemo repudiandae optio velit neque eum enim obcaecati autem ratione nam
        commodi modi. Alias laudantium repellat, mollitia aperiam cupiditate
        pariatur magni ea delectus ad. Provident alias eius sunt numquam aut
        pariatur optio?
      </p>
    </div>
  );
};
export default Content;
