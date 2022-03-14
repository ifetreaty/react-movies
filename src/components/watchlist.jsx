import { useState } from "react";

const WatchList = () => {
  const [list, setList] = useState(true);

  return (
    <div className="browse-movies-add-list">
      <button className="browse-movies-tag" onClick={() => setList(!list)}>
        {list ? "+ Add To Watch List" : "✔ Added to Watch List"}
      </button>
    </div>
  );
};

export default WatchList;
