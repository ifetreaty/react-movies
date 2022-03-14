import "../App.css";

const Movie = ({ movie }) => {
  return (
    <div>
      <img
        className="recommended-images"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.path}
      />
    </div>
  );
};
export default Movie;
