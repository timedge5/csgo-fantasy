import React from "react";
import { Routes } from "./routes";
import { Container } from "@material-ui/core";
import { Nav } from "./components";
import axios from 'axios'

axios.defaults.baseURL = "https://us-central1-csgo-fantasy-751b7.cloudfunctions.net/api"

export const App = () => {
  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Nav/>
      <Routes />
    </Container>
  );
};
