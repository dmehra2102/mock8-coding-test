import { ReactNode } from "react";
import {
      Box,
      Flex,
      Avatar,
      HStack,
      Link,
      IconButton,
      Button,
      Menu,
      MenuButton,
      MenuList,
      MenuItem,
      MenuDivider,
      useDisclosure,
      useColorModeValue,
      Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = [
      { name: "Home", url: "/" },
      { name: "Register", url: "/register" },
      { name: "Login", url: "/login" },
];

export default function Navbar() {
      const { isOpen, onOpen, onClose } = useDisclosure();

      return (
            <>
                  <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                        <Flex
                              h={16}
                              alignItems={"center"}
                              justifyContent={"space-between"}
                        >
                              <IconButton
                                    size={"md"}
                                    icon={
                                          isOpen ? (
                                                <CloseIcon />
                                          ) : (
                                                <HamburgerIcon />
                                          )
                                    }
                                    aria-label={"Open Menu"}
                                    display={{ md: "none" }}
                                    onClick={isOpen ? onClose : onOpen}
                              />
                              <HStack spacing={8} alignItems={"center"}>
                                    <HStack
                                          as={"nav"}
										  fontSize="2xl"
                                          spacing={10}
                                          display={{ base: "none", md: "flex" }}
                                    >
                                          {Links.map((link) => (
                                                <RouterLink to={link.url}>
                                                      {link.name}
                                                </RouterLink>
                                          ))}
                                    </HStack>
                              </HStack>
                        </Flex>
                  </Box>
            </>
      );
}
