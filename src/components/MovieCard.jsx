/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

export default function MovieCard({ movie, onClick }) {
  const baseUrl = "https://image.tmdb.org/t/p/w780/";
  return (
    <Card className="w-[345px] h-[30rem]">
      <CardContent className="w-[347px] h-[30rem] cursor-pointer relative">
        <img
          src={`${baseUrl}${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full rounded-xl"
        />
        <Button
          className="absolute bottom-5 right-5 bg-blue-500 hover:bg-blue-600"
          onClick={() => {
            onClick(movie.id);
          }}
        >
          Watch
        </Button>
      </CardContent>
    </Card>
  );
}
