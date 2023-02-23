import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

/* eslint-disable no-unused-vars */
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = ["a", "b"];

  return (
    <div className="search-params">
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
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal}> {animal}</option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          disabled={breeds.length === 0}
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        >
          <option />
          {breeds.map((breed) => (
            <option key={breed}> {breed}</option>
          ))}
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
