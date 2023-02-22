import { useState } from "react";

let v = "";
/* eslint-disable no-unused-vars */
const SearchParams = () => {
  const [location, setLocation] = useState("");
  v = location;
  return (
    <div className="search-params">
      <h1>{v}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
