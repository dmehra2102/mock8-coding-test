import { Box, Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Profile_request_function } from "../Redux/action";
import { Text, Flex } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, LinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";

const Homepage = () => {
      const dispatch = useDispatch();
      const username = JSON.parse(localStorage.getItem("user_name"));
	  const navigate = useNavigate();
      const { token } = JSON.parse(localStorage.getItem("user_profile_token"));
      const Userdetails = JSON.parse(localStorage.getItem("user_details"));
	  const handleClick = ()=>{
		navigate("/employees" , {replace:false})
	  }
      useEffect(() => {
            const params = {
                  username,
                  token,
            };
            dispatch(Profile_request_function(params));
            console.log(Userdetails);
      }, []);
      return (
            <div>
                  <Box
                        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                        m={"auto"}
                        mt={"10vh"}
                        borderRadius="6px"
                        w="30vw"
                        h={"56vh"}
                  >
                        <Flex display={"flex"}>
                              <Avatar
                                    size={"2xl"}
                                    m="6"
                                    src="https://bit.ly/broken-link"
                              />{" "}
                              <Text h={"10vh"} fontSize="2xl" m="auto">
                                    {Userdetails.name}
                              </Text>
                        </Flex>
                        <Box mt="4vh" justifyContent="center">
                              <Flex
                                    textAlign={"center"}
                                    fontSize={"xl"}
                                    w={"85%"}
                                    m="auto"
                              >
                                    <EmailIcon pt={"0.6vh"} />
                                    <Text pb={"1vh"} pl={"1vw"}>
                                          {Userdetails.email}
                                    </Text>
                              </Flex>
                              <Flex
                                    textAlign={"center"}
                                    fontSize={"xl"}
                                    w={"85%"}
                                    m="auto"
                              >
                                    <PhoneIcon pt={"0.6vh"} />
                                    <Text pb={"1vh"} pl={"1vw"}>
                                          {Userdetails.mobile}
                                    </Text>
                              </Flex>
                              <Flex
                                    textAlign={"center"}
                                    fontSize={"xl"}
                                    w={"85%"}
                                    m="auto"
                              >
                                    <LinkIcon pt={"0.6vh"} />
                                    <Text pb={"1vh"} pl={"1vw"}>
                                          {Userdetails.description}
                                    </Text>
                              </Flex>
                        </Box>
                  </Box>
                  <Button onClick={handleClick} fontSize={"xl"} m={"8vh"} colorScheme='teal' size='md'>Employees List</Button>
            </div>
      );
};

export default Homepage;
