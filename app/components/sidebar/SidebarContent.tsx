import {
  Box,
  Collapse,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaRss, FaClipboardCheck } from "react-icons/fa";
import { HiCollection, HiCode } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import Sidebar from "./Sidebar";

export default function SidebarContent(props: any) {
  const integrations = useDisclosure();

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      _dark={{ bg: "gray.800" }}
      border
      color="inherit"
      borderRightWidth="1px"
      w="100"
      {...props}
    >
      <Flex
        px="4"
        fontWeight="semibold"
        overflow={"hidden"}
        backgroundColor={"blackAlpha.200"}
        width={"100%"}
        marginTop={"8"}
      >
        <Sidebar />
        <Flex
          direction="column"
          as="nav"
          fontSize="sm"
          color="gray.600"
          aria-label="Main Navigation"
        >
          <Text fontSize="2xl" color="whiteAlpha.800" fontFamily={"body"}>
            Server Name
          </Text>

          <NavItem icon={MdHome}>Bot Config</NavItem>
          <NavItem icon={FaRss}>TGRs</NavItem>
          <NavItem icon={HiCollection}>Community Roles</NavItem>
          <NavItem icon={FaClipboardCheck}>Marketplace</NavItem>
          <NavItem icon={HiCode} onClick={integrations.onToggle}>
            Integrations
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              // transform={integrations.isOpen && "rotate(90deg)"}
            />
          </NavItem>
          <Collapse in={integrations.isOpen}>
            <NavItem pl="12" py="2">
              Twitter
            </NavItem>
            <NavItem pl="12" py="2">
              Zapier
            </NavItem>
          </Collapse>
        </Flex>
      </Flex>
    </Box>
  );
}

const NavItem = (props: any) => {
  const { icon, children, ...rest } = props;
  const color = useColorModeValue("gray.600", "gray.300");
  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      fontSize={"lg"}
      cursor="pointer"
      color="inherit"
      _dark={{ color: "gray.400" }}
      _hover={{
        bg: "gray.100",
        _dark: { bg: "gray.900" },
        color: "gray.900",
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {icon && (
        <Icon
          mx="2"
          boxSize="4"
          _groupHover={{
            color: color,
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};
