/* eslint-disable react/prop-types */
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import HeroSectionSkeleton from "./HeroSectionSkeleton";

export default function HeroSectionCarousel({ heroSectionMovie, loading }) {
  const baseUrl = "https://image.tmdb.org/t/p/w780/";

  return (
    <>
      {loading ? (
        <div
          className="mt-5 h-[40rem]"
          style={{
            width: "calc(100vw - 30rem)",
          }}
        >
          <HeroSectionSkeleton />
        </div>
      ) : (
        <Carousel
          opts={{
            align: "start",
          }}
          className="h-full"
          style={{
            width: "calc(100vw - 30rem)",
          }}
        >
          <CarouselContent>
            {heroSectionMovie &&
              heroSectionMovie?.map((movie, index) => (
                <CarouselItem
                  key={movie.id || index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="">
                    <Card>
                      <CardContent className="flex h-[40rem] w-full items-center justify-center relative">
                        <img
                          src={`${baseUrl}${movie.poster_path}`}
                          alt={movie.title}
                          className="h-full w-full rounded-xl"
                        />
                        <Button className="absolute right-5 bottom-5 bg-blue-500 hover:bg-blue-600">
                          Watch Trailer
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      )}
    </>
  );
}
