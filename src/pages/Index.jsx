import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16} bg={bg}>
        <Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
          <Heading as="h1" size="xl" fontWeight="bold" color={color} textAlign={["center", "center", "left", "left"]}>
            Innovative Solutions for Your Business
          </Heading>
          <Heading as="h2" size="md" color={useColorModeValue("gray.800", "gray.200")} opacity="0.8" fontWeight="normal" lineHeight={1.5} textAlign={["center", "center", "left", "left"]}>
            Join the thousands of innovators already building with us.
          </Heading>
          <Button
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            rightIcon={<FaArrowRight />}
            colorScheme="teal"
            variant="solid"
            boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%)"
            _hover={{
              bg: "teal.700",
            }}
            _focus={{
              bg: "teal.700",
            }}
          >
            Get Started
          </Button>
          <Text fontSize="xs" mt={2} textAlign="center" color={useColorModeValue("gray.600", "gray.400")}>
            No credit card required.
          </Text>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          {/* TODO: Make sure to replace `https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWFzJTIwaWxsdXN0cmF0aW9ufGVufDB8fHx8MTcwOTc0ODgxOHww&ixlib=rb-4.0.3&q=80&w=1080` with an actual img link */}
          <Image src="https://images.unsplash.com/photo-1574087274792-b82d8d1e7094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxzYWFzJTIwaWxsdXN0cmF0aW9ufGVufDB8fHx8MTcwOTc0ODgxOHww&ixlib=rb-4.0.3&q=80&w=1080" size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
