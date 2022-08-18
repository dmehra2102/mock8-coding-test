import { Box } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Profile_request_function } from "../Redux/action";
import { Text, Flex } from "@chakra-ui/react";

const Homepage = () => {
      const dispatch = useDispatch();
      const username = JSON.parse(localStorage.getItem("user_name"));
      const { token } = JSON.parse(localStorage.getItem("user_profile_token"));
      const Userdetails = JSON.parse(localStorage.getItem("user_details"));
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
                  <Box  m={"auto"} mt={"10vh"} borderRadius="6px" border={"1px solid red"} w="40vw" h={"60vh"}>
                        <Flex border={"1px solid green"} display={"flex"}>
                              <Avatar
                                    size={"2xl"}
                                    m="6"
                                    src="https://bit.ly/broken-link"
                              />{" "}
                              <Text h={"10vh"} fontSize="3xl" m="auto">
                                    {Userdetails.name}
                              </Text>
                        </Flex>
                  </Box>
            </div>
      );
};

export default Homepage;
