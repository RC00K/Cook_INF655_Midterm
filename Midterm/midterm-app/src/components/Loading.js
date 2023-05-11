import { Flex, Spinner } from '@chakra-ui/react';
import React from 'react';

function Loading() {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            height="100vh"
            width="100vw"
        >
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Flex>
    );
}

export default Loading;