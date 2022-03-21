import WatchList from "../components/watchlist";
import "../App.css";

const Browse = ({ movie }) => {
  return (
    <div className="browse-movies-container">
      <div>
        <img
          className="browse-movies-images"
          src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          alt={movie.path}
        />
      </div>
      <div className="browse-movies-text">
        <div className="browse-movies-title">{movie.title}</div>
        <div className="browse-movies-overview">{movie.overview}</div>
        <WatchList />
      </div>
    </div>
  );
};
export default Browse;
