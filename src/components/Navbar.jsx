import {
      Box,
      Flex,
      HStack,
      IconButton,
      useDisclosure,
      useColorModeValue,
} from "@chakra-ui/react";
import { useSelector,useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

const Links = [
      { name: "Home", url: "/" ,key:"20099238"},
      { name: "Register", url: "/register",key:"209211238" },
      { name: "Login", url: "/login", key:"39482238" },
];


export default function Navbar() {
	const {isAuth} = useSelector((state)=> state.AuthReducer);
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleLogout = ()=>{
		localStorage.setItem("user_profile_token",JSON.stringify({isAuth : false, token : null}));
	}

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
                                                <RouterLink key={link.key} to={link.url}>
                                                      {link.name}
                                                </RouterLink>
                                          ))}
										  {isAuth ? <RouterLink onClick={handleLogout} to={"/login"}>Logout</RouterLink> : null}
                                    </HStack>
                              </HStack>
                        </Flex>
                  </Box>
            </>
      );
}
