import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from "axios";
import { Box, Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { Text, Flex } from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";


const IndividualEmployee = () => {
	const {id} = useParams();
	const navigate = useNavigate();
	const [data,setData] = useState({})
	console.log(id);
	useEffect(()=>{
		axios.get(`https://mock8-coding-server.herokuapp.com/api/employees_list/${id}`)
		.then((res)=> setData(res.data))
		.catch((error)=> console.log(error));
	},[])
  return (
	<div>
                  <Box
                        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                        m={"auto"}
                        mt={"10vh"}
                        borderRadius="6px"
						p={"1vw"}
                        w="30vw"
                        // h={"56vh"}
                  >
                        <Flex display={"flex"}>
                              <Avatar
							  border={"1px solid black"}
                                    size={"2xl"}
                                    m="6"
                                    src={data.image}
                              />{" "}
                              <Text h={"10vh"} fontSize="2xl" m="auto">
                                    {data.name}
                              </Text>
                        </Flex>
                        <Box mt="2vh" justifyContent="center">
                              <Flex
                                    textAlign={"center"}
                                    fontSize={"xl"}
                                    w={"85%"}
                                    m="auto"
                              >
                                    Gender->
                                    <Text pb={"1vh"} pl={"1vw"} textDecoration="underline">
                                          {data.gender}
                                    </Text>
                              </Flex>
							  <Flex
                                    textAlign={"center"}
                                    fontSize={"xl"}
                                    w={"85%"}
                                    m="auto"
                              >
                                    Salary->
                                    <Text pb={"1vh"} pl={"1vw"} textDecoration="underline">
									₹ {data.salary}
                                    </Text>
                              </Flex>
                              <Flex
                                    textAlign={"center"}
                                    fontSize={"xl"}
                                    w={"85%"}
                                    m="auto"
                              >
                                    Contact Number->
                                    <Text pb={"1vh"} pl={"1vw"} textDecoration="underline">
                                          {data.contact_number}
                                    </Text>
                              </Flex>
                              <Flex
                                    textAlign={"center"}
                                    fontSize={"xl"}
                                    w={"85%"}
                                    m="auto"
                              >
                                     Department->
                                    <Text pb={"1vh"} pl={"1vw"} textDecoration="underline">
                                          {data.department}
                                    </Text>
                              </Flex>
							  <Flex
                                    textAlign={"center"}
                                    fontSize={"xl"}
                                    w={"85%"}
                                    m="auto"
                              >
                                    Age->
                                    <Text pb={"1vh"} pl={"1vw"} textDecoration="underline">
                                          {data.age}
                                    </Text>
                              </Flex>
							  <Button onClick={()=> navigate("/employees")}>Go Back</Button>
                        </Box>
                  </Box>
                  {/* <Button onClick={handleClick} fontSize={"xl"} m={"8vh"} colorScheme='teal' size='md'>Employees List</Button> */}
            </div>
  )
}

export default IndividualEmployee