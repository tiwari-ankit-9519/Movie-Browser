import React from "react";

export default function MovieCard({ title, overview, poster_path, vote }) {
  const imageLink = "https://image.tmdb.org/t/p/w500" + poster_path;
  const rating = vote.toFixed(2);
  // const description = overview.slice(0, 200) + "....";

  return (
    <div className="bg-card shadow-lg max-h-80 border sm:rounded-3xl p-8 flex space-x-8 text-white">
      <div className="overflow-visible w-1/2">
        <img className="rounded-3xl shadow-lg h-60" src={imageLink} alt="" />
      </div>
      <div className="flex flex-col w-1/2 space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="bg-yellow-400 font-bold rounded-xl p-2">{rating}</div>
        </div>
        <p className=" text-white max-h-40 overflow-y-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-watch rounded-md p-2 text-white">
          Watch Now
        </button>
      </div>
    </div>
  );
}
