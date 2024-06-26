import { useState } from "react";
import axios from "axios";
import MovieCard from "../UI/MovieCard";
import LoadingComponent from "../UI/LoadingComponent";

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  console.log(keyword);

  const searchMovie = async (e) => {
    setKeyword(e.target.value);
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=a010775c34fabfa9cef89de9fba2a335`
      );
      setData(response.data.results);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(data);
  return (
    <div className="flex flex-col gap-5 mt-5 mx-10">
      {error && <p>Some error occured</p>}
      <label className="text-white text-xl">Search Movies</label>
      <input
        type="text"
        name=""
        className="p-5 foucs: border-blue-500 focus: border focus: outline-none rounded"
        onChange={searchMovie}
      />

      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data?.map((m) => (
            <MovieCard
              key={m.id}
              title={m.title}
              overview={m.overview}
              poster_path={m.poster_path}
              vote={m.vote_average}
              id={m.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
