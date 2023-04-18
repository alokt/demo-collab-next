import { Avatar, Flex, Tooltip } from "@chakra-ui/react";

export default function SideBarItem() {
  const serverName = "CL-Staging (QA)";
  return (
    <Flex direction="column" gap={"4"} alignItems={"center"}>
      <Tooltip
        bgColor={"yellow.100"}
        hasArrow
        label={serverName}
        placement="right"
      >
        <Avatar
          name={serverName}
          src="https://bit.ly/broken-link"
          cursor="pointer"
        />
      </Tooltip>
    </Flex>
  );
}
