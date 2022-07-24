import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";

import Star from "../../assets/grey.jpeg";

function Planets() {
  const url = "https://swapi.dev/api/planets";
  const [title, setTitle] = useState([]);
  const [results, setResults] = useState([]);
  //const result=emps.map((emp,index) => <li key={index}>{emp.name}</li>);

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
        className=""
        style={{
          backgroundImage: `url(${Star})`,
          backgroundRepeat: "no-repeat",

          backgroundSize: "cover",

          height: "max-height",
        }}
      >
        <div className="mt-5 px-24  ">
          <span className="flex flex-col text-7xl font-sans font-semibold track-tight sm:text-4xl text-white">
            {title}
          </span>
        </div>
        <div className="mt-10 flex flex-col px-20 text-white ">
        {/* {paragraph} */}
        {results.map(({ name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population,residents, films, created, edited, url }) => (
        <p key={name}>{name} {rotation_period} {orbital_period} {diameter} {climate} {gravity} {terrain} {surface_water}

          <p>
            Population: {population}
          </p>
         
          <p>
            Residents: {residents}
          </p>
          <p>
            Films: {films}
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
          </p>
      ))}
        </div>
      </div>
    </>
  );
}

export default Planets;
