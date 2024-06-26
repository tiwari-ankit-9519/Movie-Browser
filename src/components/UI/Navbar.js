import { useState } from "react";
import {
  FireIcon,
  FilmIcon,
  TvIcon,
  HomeIcon,
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

const buttonNames = [
  {
    name: "Home",
    icon: <HomeIcon className="w-5 h-5 md:w-5 md:h-5" />,
    to: "/",
  },
  {
    name: "Trending",
    icon: <FireIcon className="w-5 h-5 md:w-5 md:h-5" />,
    to: "/trending",
  },
  {
    name: "Movies",
    icon: <FilmIcon className="w-5 h-5 md:w-5 md:h-5" />,
    to: "/movies",
  },
  {
    name: "TV",
    icon: <TvIcon className="w-5 h-5 md:w-5 md:h-5" />,
    to: "/tv",
  },
  {
    name: "Search",
    icon: <MagnifyingGlassIcon className="w-5 h-5 md:w-5 md:h-5" />,
    to: "/search",
  },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-gradient-to-r from-navbar to-transparent text-white flex md:flex-row justify-between items-center py-4 px-6 md:py-3 md:px-4">
      <div className="text-lg md:text-xl font-bold">logo</div>
      <div className="list-none flex md:flex-row gap-3 md:gap-5 items-center">
        <Bars3CenterLeftIcon
          className="w-5 h-5 block md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        />
        {buttonNames.map((button) => (
          <Link
            to={button.to}
            key={button.name}
            className="bg-gradient-to-r from-buttonBg to-buttonBg2 hidden md:flex items-center justify-center font-medium gap-2 p-2 md:p-2 rounded text-sm md:text-base md:min-w-24"
          >
            {button.icon}
            {button.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
