import {  Fragment } from 'react'
import {  Image } from "@chakra-ui/react";
import { Routes, Route,Link } from "react-router-dom";

import { LaunchDetails } from "./components/LaunchDetails";
import { LaunchList } from "./components/LaunchList";

import { RocketDetails } from "./components/RocketDetails";

import logo from "./assets/SpaceX-Logo.wine.png";




export function App() {
  return (
    <Fragment>
      <Image m={4} src={logo} alt="" width={300} />
      <Routes>
        <Route path='/' element={<LaunchList />} />
        <Route path='launch/:launchId' element={<LaunchDetails />} />
        <Route path='rockets/:rocketId' element={<RocketDetails />} />
      </Routes>
    </Fragment>
  )
}


