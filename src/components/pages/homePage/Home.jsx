import React from "react";
import Title from "../../title";
import s from "./home.module.scss";

function Home() {
  return (
    <div className={`${s.home} content`}>
      <Title text="Home Page" />
    </div>
  );
}

export default Home;
