import React from "react";
import s from "./people.module.scss";
import useFetch from "../../../hooks/useFetch";

function People() {
  const { data, isPending, error } = useFetch("https://swapi.dev/api/people/1");
  console.log(data);

  return (
    <div className={`${s.people} content`}>
      <h1>Hellow world</h1>
      <h2>This is People page!</h2>
      <br />
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      <br />
      {data &&
        Object.entries(data).map(([key, value]) => (
          <ul key={value}>
            <li>
              <b>{key}: </b>
              {value}
            </li>
          </ul>
        ))}
    </div>
  );
}

export default People;
