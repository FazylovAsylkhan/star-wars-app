import React from "react";
import "../page.scss";
import s from "./home.module.scss";

function Home() {
  return (
    <div className={`${s.home} content`}>
      <h1>Hellow world</h1>
      <h2>This is Home page!</h2>
    </div>
  );
}

export default Home;
