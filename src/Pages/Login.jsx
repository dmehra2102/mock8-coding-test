import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Login_request_function } from "../Redux/action";

const Login = () => {
  const dispatch = useDispatch();
	const [loginInfo, setLoginInfo] = useState({
		  password: "",
		  username: "",
	});
	const handleChange = (e) => {
	  e.preventDefault();
	  const {id,value} = e.target;
	  setLoginInfo({
		  ...loginInfo,
		  [id] : value
	  })
	};
	const handleLogin = (e)=>{
	  e.preventDefault();
	  if(loginInfo.password!=="" && loginInfo.username!==""){
		  dispatch(Login_request_function(loginInfo));
	  }
	}
	return (
		  <Flex
				minH={"100vh"}
				align={"center"}
				justify={"center"}
				bg={useColorModeValue("gray.50", "gray.800")}
		  >
				<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
					  <Stack align={"center"}>
							<Heading fontSize={"4xl"}>
								  Sign in to your account
							</Heading>
							<Text fontSize={"lg"} color={"gray.600"}>
								  to enjoy all of our cool{" "}
								  <Link color={"blue.400"}>features</Link> ✌️
							</Text>
					  </Stack>
					  <Box
							rounded={"lg"}
							bg={useColorModeValue("white", "gray.700")}
							boxShadow={"lg"}
							p={8}
					  >
							<Stack spacing={4} onChange={handleChange}>
								  <FormControl id="username">
										<FormLabel>Username</FormLabel>
										<Input type="email" />
								  </FormControl>
								  <FormControl id="password">
										<FormLabel>Password</FormLabel>
										<Input type="password" />
								  </FormControl>
								  <Stack spacing={10}>
										<Stack
											  direction={{
													base: "column",
													sm: "row",
											  }}
											  align={"start"}
											  justify={"space-between"}
										>
											  <Checkbox>Remember me</Checkbox>
											  <Link color={"blue.400"}>
													Forgot password?
											  </Link>
										</Stack>
										<Button
										onClick={handleLogin}
											  bg={"blue.400"}
											  color={"white"}
											  _hover={{
													bg: "blue.500",
											  }}
										>
											  Sign in
										</Button>
								  </Stack>
							</Stack>
							<Text>
								  Create New Account
								  <RouterLink
										style={{
											  paddingLeft: "0.5vw",
											  textDecoration: "underline",
											  color: "blue",
										}}
										to={"/register"}
								  >
										Register
								  </RouterLink>
							</Text>
					  </Box>
				</Stack>
		  </Flex>
	);
};

export default React.memo(Login);
