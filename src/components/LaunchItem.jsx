import { HiCalendar } from "react-icons/hi";
import { Box, Text, Spacer, Tag, Flex,Button } from "@chakra-ui/react";
import dayjs from "dayjs";
import 'dayjs/locale/es'

export function LaunchItem(launch) {
    return (
        <Box bg='gray.100' p={4} m={4} borderRadius='lg' >
            <Flex>
                <Text fontSize='2xl' >
                    Mission <strong>{launch.mission_name}</strong>({launch.launch_year})
                </Text>
                <Spacer />
                    <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"} >
                        {launch.launch_success ? "Success" : "Failure"}
                    </Tag>
     
            </Flex>
            <Flex align='center' color='gray.500' >
                <HiCalendar />
                <Text fontSize='sm' lm={1} >
                    {
                        dayjs(launch.launch_date_local)
                            .locale('es')
                            .format("D MMMM, YYYY")
                    }
                </Text>
            </Flex>
            <Button mt={2} colorScheme="purple">More Details</Button>

        </Box>
    )
}