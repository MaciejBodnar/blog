import React from "react";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-sky-500 to-indigo-500 text-white">
      <div className="items-center flex-wrap px-3 container mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col w-full justify-center items-start md:w-2/5 text-center md:text-center">
          <p className="capitalize tracking-wide w-full">
            Explore insight, tutorials and stories for curious minds like yours
          </p>
          <h2 className="my-5 text-5xl font-bold leading-tight">
            Welcome to my Blog
          </h2>

          <p className="leading-normal text-2xl">Join a community!!</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
