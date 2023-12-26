import { useState, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";

import { Box, Flex, Spacer, Tag, Text } from "@chakra-ui/react";

import * as API from "../services/launches";

export function RocketDetails() {
    const [launch, setLaunches] = useState({})
    const { launchId } = useParams()
    useEffect(() => {
        API.getLaunchByFlightNumber(launchId)
            .then(setLaunches)
            .catch(console.log)
    }, [launchId])

    return (
        <Box bg='gray.100' p={4} m={4} borderRadius='lg' >
            {!launch ? (
                <div>Loading...</div>
            ) : (
                <Fragment>
                    <Flex>
                        <Text fontSize='2xl' >
                            Mission <strong>{launch.mission_name}</strong>({launch.launch_year})
                        </Text>
                        <Spacer />
                        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"} >
                            {launch.launch_success ? "Success" : "Failure"}
                        </Tag>

                    </Flex>
                    <Flex>
                        <Box>
                            <Link to={`/rockets/${launch.rocket?.rocket_id}`} >
                                Rocket {launch.rocket?.rocket_name}
                            </Link>
                        </Box>
                    </Flex>
                </Fragment>
            )}

        </Box>
    )

}