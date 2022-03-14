import "../App.css";
import trailerImage from "../assets/images/animSnip-removebg-preview.png";
import TrailerButton from "../components/button";

const Trailer = () => {
  return (
    <div className="movie-trailer">
      <div className="movie-trailer-text">
        <h1 className="movie-trailer-header">Frozen 2</h1>
        <p>2019 &bull; Drama/Fantasy &bull; 2 hours</p>
        <p>
          Elsa the Snow Queen and her sister Anna embark on an <br />
          adventure far away from the kingdom of Arendelle.....
        </p>
        <p>Release Date: 22 November, 2019</p>
        <TrailerButton />
      </div>
      <div className="movie-trailer-image">
        <img
          src={trailerImage}
          className="trailer-image-sizing"
          alt="trailer"
        />
      </div>
    </div>
  );
};

export default Trailer;
