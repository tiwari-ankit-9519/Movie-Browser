import Loader from "@/components/Loader";
import MovieDetailsPoster from "@/components/MovieDetailsPoster";
import { getSingleMovie } from "@/features/singleMovieSlice";
import { ArrowLeftCircle } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function MovieDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { movieId } = useParams();

  useEffect(() => {
    dispatch(getSingleMovie(movieId));
  }, [dispatch, movieId]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const { loading, movie } = useSelector((state) => state.singleMovie);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="px-[5%] py-[2%]">
          <div className="flex items-center gap-10">
            <ArrowLeftCircle
              onClick={handleBackClick}
              className="w-7 h-7 cursor-pointer"
            />
            <h1 className="text-3xl font-bold">Movie Details</h1>
          </div>

          <div>
            <MovieDetailsPoster movie={movie} />
          </div>
        </main>
      )}
    </>
  );
}
export default MovieDetails;
