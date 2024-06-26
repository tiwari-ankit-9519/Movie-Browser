import React from "react";

export default function TVCard({ title, backdrop_path, vote_average }) {
  const rating = vote_average.toFixed(1);

  const finalImg = `https://image.tmdb.org/t/p/w500${backdrop_path}`;

  return (
    <div className="flex flex-col bg-card rounded-md">
      <img
        src={finalImg}
        alt="log"
        className="rounded-tl-md rounded-tr-md object-cover"
      />
      <div className="p-5 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-xl">{title}</h2>
          <p className="text-white text-sm bg-yellow-600 p-2 rounded-md">
            {rating}
          </p>
        </div>
        <button className="bg-watch p-2 rounded w-full">Watch Now</button>
      </div>
    </div>
  );
}
