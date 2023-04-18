import { Flex } from "@chakra-ui/react";
import SideBarItem from "./SideBarItem";

export default function Sidebar() {
  return (
    <Flex
      w={"20"}
      direction={"column"}
      gap={"4"}
      height={"calc(100vh - 20px)"}
      backgroundColor={"blackAlpha.200"}
    >
      <SideBarItem />
      {/* <SideBarItem />
      <SideBarItem /> */}
    </Flex>
  );
}
