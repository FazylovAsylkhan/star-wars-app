import React from "react";
import Header from "../header";
import Footer from "../footer";
import s from "./wrapper.module.scss";

function Wrapper({ children }) {
  return (
    <>
      <Header />
      <main className={`${s.main} container`}>{children}</main>
      <Footer />
    </>
  );
}

export default Wrapper;
