import { useEffect, useState } from "react";
import Browse from "./browse-poster";
import "../App.css";

const BrowseMovies = () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1";

  const [browse, setBrowse] = useState([]);
  useEffect(() => {
    fetchBrowse();
  }, []);
  const fetchBrowse = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setBrowse(movies.results);
  };
  return (
    <div>
      <div className="browse-movies-nav">
        <div className="browse-movies-nav-header">Browse More Movies</div>
        <ul className="browse-movies-menu-items">
          <li>Trending</li>
          <li>Top Rated</li>
          <li>New Arrival</li>
        </ul>
      </div>
      <div className="browse-movies">
        {browse.map((movie) => {
          return <Browse key={movie.id} movie={movie} />;
        })}
        <div className="browse-movies-text"></div>
      </div>
    </div>
  );
};

export default BrowseMovies;
