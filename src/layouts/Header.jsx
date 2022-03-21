import { Link } from "react-router-dom";
import "../App.css";
import SearchBox from "../components/searchbox";
import CurrentDate from "../components/date";

const MovieHeader = () => {
  return (
    <div className="movie-nav">
      <div className="movie-logo">
        <span>AnimTV</span>
      </div>

      <div className="movie-menu-items">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="movie-menu-item">Upcoming</div>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className="movie-menu-item">Genre</div>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className="movie-menu-item">Videos</div>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className="movie-menu-item">Subscription</div>
        </Link>

        <div className="movie-search-icon">
          <SearchBox></SearchBox>
        </div>
      </div>
      <div>
        <CurrentDate />
      </div>
    </div>
  );
};

export default MovieHeader;
