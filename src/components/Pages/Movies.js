import React from "react";
import useGenre from "../Hooks/useGenre";
import useMoviesByGenre from "../Hooks/useMoviesByGenre";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GenreMovies = () => {
  const { genre } = useGenre();

  return (
    <div className="container mx-auto px-4">
      {genre && genre.length > 0 ? (
        genre.map((g) => <GenreSection key={g.id} genre={g} />)
      ) : (
        <p className="text-white">No genres available.</p>
      )}
    </div>
  );
};

const GenreSection = ({ genre }) => {
  const { movies, loading, error } = useMoviesByGenre(genre?.id);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-8 mx-5">
      <h2 className="text-white text-2xl mb-5">{genre?.name}</h2>
      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="carousel-container">
        {movies && movies.length > 0 ? (
          <Slider {...settings}>
            {movies.map((m) => (
              <div key={m.id} className="p-2 ">
                <div className="bg-gray-800 rounded-lg  flex flex-col h-96">
                  <img
                    className="w-full h-40 object-cover rounded"
                    src={`https://image.tmdb.org/t/p/w200${m.poster_path}`}
                    alt={m.title}
                  />
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-white text-lg mb-2 truncate">
                        {m.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3">
                        {m.overview.length > 100
                          ? `${m.overview.substring(0, 100)}...`
                          : m.overview}
                      </p>
                    </div>
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded mt-auto"
                      onClick={() =>
                        navigate(
                          `/movie/${m.id}?api_key=a010775c34fabfa9cef89de9fba2a335`
                        )
                      }
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          !loading && (
            <p className="text-white">No movies found for this genre.</p>
          )
        )}
      </div>
    </div>
  );
};

export default GenreMovies;
