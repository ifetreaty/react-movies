import { useEffect, useState } from "react";
import Movie from "./recommended-poster";
import "../App.css";

const RecommendedMovies = () => {
  const url =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1";

  const [recommended, setRecommended] = useState([]);
  useEffect(() => {
    fetchRecommended();
  }, []);
  const fetchRecommended = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setRecommended(movies.results);
  };
  return (
    <div className="recommended-movies-container">
      <h1 className="recommended-movies-container-nav">Recommended Movies</h1>
      <div className="recommended-movies-images">
        {recommended.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default RecommendedMovies;
