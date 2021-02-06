import styled, { keyframes, createGlobalStyle } from "styled-components";
import React from "react";
import Leadspace from "../components/leadspace";
import Experience from "../components/experience";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header/>
      <Leadspace/>
      <Experience/>
    </>
  );
}
