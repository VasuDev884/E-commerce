import React from "react";
import { LandingPage } from "./LandingPage";
import { NavBar } from "./navBar/navBar";
import {Footer} from './footer/index'
export const AllPages = () => {
  return (
    <>
      <NavBar />
      <LandingPage />
      <Footer/>
    </>
  );
};
