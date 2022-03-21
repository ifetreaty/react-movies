import MovieHeader from "../layouts/Header";
import Trailer from "../layouts/Trailer";
import RecommendedMovies from "../layouts/RecommendedMovies";
import BrowseMovies from "../layouts/BrowseMovies";
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <MovieHeader />
      <Trailer />
      <RecommendedMovies />
      <BrowseMovies />
    </div>
  );
};

export default Home;
