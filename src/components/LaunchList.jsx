import { useState, useEffect, Fragment } from 'react'
import { Heading } from "@chakra-ui/react";

import { LaunchItem } from "./LaunchItem";

import * as API from "../services/launches";

export function LaunchList() {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        API.getAllLaunches()
        .then(setLaunches)
        .catch(console.log)
    })

    return (
        <Fragment>
            <Heading Heading as='h1' size='xl' m={4} > SpaceX Launches</Heading >
            {launches.length===0?(
                <div>Loading...</div>
            ):(
                <section>
                {launches.map(launch => (
                    <LaunchItem key={launch.flight_number}{...launch} />
                ))}
            </section>
            )}

        </Fragment>
    )
}