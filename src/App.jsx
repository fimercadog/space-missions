import { useState, useEffect, Fragment } from 'react'
import { Heading,  Image } from "@chakra-ui/react";
import { LaunchItem } from "./components/LaunchItem";


import logo from "./assets/SpaceX-Logo.wine.png";
import * as API from "./services/launches";



export function App() {
  const [launches, setLaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setLaunches)

  }, [])


  return (
    <Fragment>
      <Image m={4} src={logo} alt="" width={300} />
      <Heading as='h1' size='xl' m={4} >SpaceX Launches</Heading>
      <section>
        {launches.map(launch => (
        <LaunchItem key={launch.flight_number}{...launch}  />
        ))}
      </section>

    </Fragment>
  )
}


