import {
  Avatar,
  Badge,
  Box,
  Button,
  Code,
  Flex,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { BiDetail, BiDownload } from "react-icons/bi";

export default function AppCard(props: any) {
  const item = props.item;
  return (
    <Box
      maxW={"350px"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bgColor={"blackAlpha.400"}
      p={"4"}
    >
      <Flex>
        {item.icons && item.icons.length > 0 ? (
          <Avatar name="avatar" src={item.icons[0].src} size={"xl"} />
        ) : (
          <Avatar name={item.name} size={"xl"} />
        )}
        <Box
          paddingLeft="5"
          display="flex"
          alignItems={"start"}
          flexDirection={"column"}
        >
          <VStack alignItems={"start"} spacing={"1"}>
            <Heading size="md">{item.name}</Heading>
            <HStack spacing="1">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Free
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="yellow">
                New
              </Badge>
            </HStack>
            <Code fontFamily={"heading"} fontSize="sm" color="green.500">
              Notification
            </Code>
          </VStack>
        </Box>
      </Flex>

      <Box mt="2" fontWeight="semibold" lineHeight="tight" noOfLines={2}>
        {item.description}
      </Box>

      <Flex marginTop={"6"} justifyContent={"center"} gap={"8"}>
        {item.isInstalled ? (
          <Button colorScheme="teal" variant="outline">
            Uninstall
          </Button>
        ) : (
          <Button colorScheme="yellow" leftIcon={<BiDownload />}>
            Install
          </Button>
        )}

        <Button colorScheme="yellow" leftIcon={<BiDetail />}>
          Share
        </Button>
      </Flex>
    </Box>
  );
}
