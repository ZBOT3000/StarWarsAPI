import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header";
import Star from "../../assets/grey.jpeg";

function People() {
  const url = "https://swapi.dev/api/people";
  const [title, setTitle] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.count);
        setTitle(res.data.count);
        console.log(res.data.results);
        setResults(res.data.results);

      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <>
      <div>
        <Header />
      </div>
      <div
        style={{
          backgroundImage: `url(${Star})`,
          backgroundRepeat: "no-repeat",

          backgroundSize: "cover",

          height: "max-height",
        }}
      >
        <div className="mt-5 px-24 ">
          <span className="flex flex-col text-7xl font-sans font-semibold track-tight sm:text-4xl text-white">
            {title}
          </span>
        </div>
        <div className="mt-10 flex flex-col px-20 text-white ">
      
        {results.map(({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships, created, edited, url }) => (
        <div key={name}>
          {name} {mass} {height} {hair_color} {skin_color} {eye_color} {birth_year} {gender}
          <p>
            Films: {films}
          </p>
          <p>
            Species: {species}
          </p>
          <p>
            Vehicles: {vehicles}
          </p>
          <p>
            Starships: {starships}
          </p>
          <p>
            created: {created}
          </p>
          <p>
            edited: {edited}
          </p>
          <p>
            edited: {url}
          </p>
        </div>
        
      ))}

        </div>
      </div>
    </>
  );
}

export default People;
