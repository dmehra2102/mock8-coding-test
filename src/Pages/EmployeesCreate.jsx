import {
      Button,
      Flex,
      FormControl,
      FormLabel,
      Heading,
      Input,
      Stack,
      useColorModeValue,
      Avatar,
      AvatarBadge,
      IconButton,
      Center,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Post_Request_user } from "../Redux/action";
import { useNavigate } from "react-router";

function EmployeesCreate() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [newuserDeatils,setNewuserDetails] = useState({
		image : "",
		name : "",
		age : "",
		gender : "",
		department : "",
		contact_number : "",
		salary : ""
	})
	const handleSubmitNewUser = (e)=>{
		e.preventDefault();
		dispatch(Post_Request_user(newuserDeatils));
		navigate("/employees")
	}
	const handleChange = (e)=>{
		const {id,value} = e.target;
		setNewuserDetails({
			...newuserDeatils,
			[id] : value
		})
	}
      return (
            <Flex
                  minH={"100vh"}
                  align={"center"}
                  justify={"center"}
                  bg={useColorModeValue("gray.50", "gray.800")}
            >
                  <Stack
				  onChange={handleChange}
                        spacing={4}
                        w={"full"}
                        maxW={"md"}
                        bg={useColorModeValue("white", "gray.700")}
                        rounded={"xl"}
                        boxShadow={"lg"}
                        p={6}
                        my={12}
                  >
                        <Heading
                              lineHeight={1.1}
                              fontSize={{ base: "2xl", sm: "3xl" }}
                        >
                              Create New User
                        </Heading>
                        <FormControl id="image">
                              <FormLabel>User Image</FormLabel>
                              <Stack direction={["column", "row"]} spacing={6}>
                                    <Center>
                                          <Avatar size="xl" src={newuserDeatils.image}>
                                                <AvatarBadge
                                                      as={IconButton}
                                                      size="sm"
                                                      rounded="full"
                                                      top="-10px"
                                                      colorScheme="red"
                                                      aria-label="remove Image"
                                                      icon={<SmallCloseIcon />}
                                                />
                                          </Avatar>
                                    </Center>
                                    <Center w="full">
                                          <Input
                                                placeholder="image url"
                                                _placeholder={{
                                                      color: "gray.500",
                                                }}
                                                type="text"
                                          />
                                    </Center>
                              </Stack>
                        </FormControl>
                        <FormControl id="name" isRequired>
                              <FormLabel>User name</FormLabel>
                              <Input
                                    placeholder="UserName"
                                    _placeholder={{ color: "gray.500" }}
                                    type="text"
                              />
                        </FormControl>
                        <FormControl id="age" isRequired>
                              <FormLabel>Age</FormLabel>
                              <Input
                                    placeholder="age"
                                    _placeholder={{ color: "gray.500" }}
                                    type="number"
                              />
                        </FormControl>
                        <FormControl id="gender" isRequired>
                              <FormLabel>Gender</FormLabel>
                              <Input
                                    placeholder="gender"
                                    _placeholder={{ color: "gray.500" }}
                                    type="text"
                              />
                        </FormControl>
						<FormControl id="department" isRequired>
                              <FormLabel>Department</FormLabel>
                              <Input
                                    placeholder="department"
                                    _placeholder={{ color: "gray.500" }}
                                    type="text"
                              />
                        </FormControl>
						<FormControl id="contact_number" isRequired>
                              <FormLabel>Conatct Number</FormLabel>
                              <Input
                                    placeholder="contact number"
                                    _placeholder={{ color: "gray.500" }}
                                    type="number"
                              />
                        </FormControl>
                        <FormControl id="salary" isRequired>
                              <FormLabel>Salary</FormLabel>
                              <Input
                                    placeholder="salary"
                                    _placeholder={{ color: "gray.500" }}
                                    type="number"
                              />
                        </FormControl>
                        <Stack spacing={6} direction={["column", "row"]}>
                              <Button
							  onClick={handleSubmitNewUser}
                                    bg={"blue.400"}
                                    color={"white"}
                                    w="full"
                                    _hover={{
                                          bg: "blue.500",
                                    }}
                              >
                                    Submit
                              </Button>
                        </Stack>
                  </Stack>
            </Flex>
      );
}

export default EmployeesCreate;
