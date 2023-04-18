"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={"3xl"} maxH={"2xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 6, md: 12 }}
          py={{ base: 20, md: 36 }}
          align={"center"}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "xl", sm: "3xl", md: "5xl" }}
            lineHeight={"110%"}
          >
            Make your community grow <br />
            <Text as={"span"} color={"green.400"}>
              and secure
            </Text>
            <Text fontSize={"2xl"} color={"yellow.500"}>
              Communities with skin in the game
            </Text>
          </Heading>

          <motion.img
            src="/assets/images/bot_holding.png"
            width={306}
            height={375}
            alt="hero image"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }} // Use an array to define animation scale values
            transition={{ duration: 5, repeat: Infinity }} // Set duration and repeat for animation
          />

          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Link href="/dashboard">
              <Button
                colorScheme={"yellow"}
                px={6}
                rightIcon={<ArrowForwardIcon />}
              >
                Get Started
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
