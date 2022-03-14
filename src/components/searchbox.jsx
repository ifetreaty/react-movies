import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

const SearchBox = () => {
  const [searchBox, setSearchBox] = useState(false);
  const onClick = () => setSearchBox(true);
  return (
    <div>
      <SearchIcon className="icon" onClick={onClick} />
      {searchBox ? <TextArea /> : null}
    </div>
  );
};

const TextArea = () => (
  <form>
    <input
      type="text"
      id="search"
      name="search"
      placeholder="Enter movie name..."
    />
  </form>
);

export default SearchBox;
