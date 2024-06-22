import React from "react";
import Movies from "../Data/Movies";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        <Movies />
      </div>
    </div>
  );
};

export default Home;
