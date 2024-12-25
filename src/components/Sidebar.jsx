import {
  VideotapeIcon,
  HomeIcon,
  TrendingUp,
  Tv2,
  VideoIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const menuOptions = [
  {
    name: "Home",
    icon: <HomeIcon />,
    route: "/",
  },
  {
    name: "Trending",
    icon: <TrendingUp />,
    route: "/trending",
  },
  {
    name: "Movies",
    icon: <VideoIcon />,
    route: "/movies",
  },
  {
    name: "Series",
    icon: <Tv2 />,
    route: "/series",
  },
];

function Sidebar() {
  return (
    <nav className="w-[25rem] min-h-screen border-r-2 p-5 flex flex-col justify-between">
      <div>
        <p className="flex gap-3 items-center text-2xl font-semibold">
          <VideotapeIcon />
          Movies
        </p>
        <h1 className="text-xl mt-10">Menu</h1>
        <div className="flex flex-col gap-5 mt-5">
          {menuOptions.map((option) => (
            <Link to={option.route} key={option.name}>
              <Button className="flex items-center w-full text-left bg-violet-600 hover:bg-violet-700 font-semibold">
                {option.icon}
                {option.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </nav>
  );
}
export default Sidebar;
