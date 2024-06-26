import { useNavigate } from "react-router-dom";
import LoadingComponent from "./LoadingComponent";
import { useState } from "react";

export default function MovieCard({ title, overview, poster_path, vote, id }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const imageLink = "https://image.tmdb.org/t/p/w500" + poster_path;
  const rating = vote.toFixed(1);
  const description = overview.slice(0, 151) + "....";

  function handleWatch(id) {
    setLoading(true);
    const timeOutId = setTimeout(() => {
      navigate(`/movie/${id}?api_key=a010775c34fabfa9cef89de9fba2a335`);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeOutId);
  }

  return (
    <>
      {loading && <LoadingComponent />}
      <div className="grid grid-cols-1 md:grid-cols-1 bg-card rounded-xl gap-3 md:min-h-52">
        <img
          src={imageLink}
          alt="logo"
          className="object-cover md:h-60 w-full rounded"
        />
        <div className="flex flex-col mx-4 md:mb-5 gap-5 md:gap-0 mt-2 md:mt-0">
          <div className="md:flex md:flex-row md:items-center md:justify-between md:mb-5">
            <h2 className="text-white text-xl font-semibold">{title}</h2>
            <p className="text-white text-sm bg-yellow-600 p-2 rounded-md md:block hidden">
              {rating}
            </p>
          </div>
          <p className="text-white text-sm text-justify">{description}</p>
          <button
            className="bg-watch text-white p-2 rounded-md mt-4 mb-4 md:mb-0"
            onClick={() => handleWatch(id)}
          >
            Watch Movie
          </button>
        </div>
      </div>
    </>
  );
}
