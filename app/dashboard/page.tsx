"use client";

import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";

import AppList from "../components/AppList";
import Header from "../components/Header";
import SidebarContent from "../components/sidebar/SidebarContent";

export default function DemoApp() {
  const sidebar = useDisclosure();

  return (
    <Box as="section" bg="gray.50" _dark={{ bg: "gray.700" }} minH="100vh">
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>

      <Box ml={{ base: 0, md: 80 }} transition=".3s ease">
        <Header onOpen={sidebar.onOpen} />

        <Tabs isLazy>
          <TabList>
            <Tab>Community Apps</Tab>
            <Tab>My Apps</Tab>
          </TabList>
          <TabPanels>
            {/* initially mounted */}
            <TabPanel>
              <AppList />
            </TabPanel>
            {/* initially not mounted */}
            <TabPanel>
              <AppList />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
