import React, { useState } from "react";
import ModalVideo from "react-modal-video";
const TrailerButton = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="bwzLiQZDw2I"
        onClose={() => setOpen(false)}
      />

      <button className="movie-trailer-button" onClick={() => setOpen(true)}>
        Watch Trailer ►
      </button>
    </div>
  );
};

export default TrailerButton;
