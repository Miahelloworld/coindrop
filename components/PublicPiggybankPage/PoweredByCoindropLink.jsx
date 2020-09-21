import NextLink from 'next/link';
import { Link as ChakraLink, Flex, Text, useTheme, Button, Icon } from '@chakra-ui/core';

const PoweredByCoindropLink = () => {
    const { colors: { orange }} = useTheme();
    return (
        <NextLink href="/" passHref>
            <ChakraLink style={{textDecoration: "none"}}>
                <Button variant="outline">
                    <Flex align="center">
                        <Icon mr={1} name="github" />
                        <Text
                            textAlign="center"
                            fontFamily="Changa"
                            fontWeight="300"
                        >
                            Powered by
                            <span
                                style={{
                                    color: orange['500'], // TODO: Use user accent color if exists
                                }}
                            >
                                {' Coindrop'}
                            </span>
                        </Text>
                    </Flex>
                </Button>
            </ChakraLink>
        </NextLink>
    );
};

export default PoweredByCoindropLink;