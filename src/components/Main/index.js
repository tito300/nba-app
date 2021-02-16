import React from "react";
import Players from "./Players";
import NavBar from "./NavBar";
import { Container } from "./styles";

const Main = () => {
  return (
  <Container>
    <NavBar />
    <Players />
  </Container>
  )
}

export default Main;
