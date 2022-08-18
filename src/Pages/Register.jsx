import React from 'react'
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Textarea,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink  } from 'react-router-dom';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Register_request_function } from '../Redux/action';
  
const Register = ()=> {
	const dispatch  = useDispatch();
	const [showPassword, setShowPassword] = useState(false);
	const [registerInfo,setRegisterInfo] = useState({
		name : "",
		username : "",
		email : "",
		password : "",
		mobile : "",
		description : ""
	})

	const handleChange = (e)=> {
		const {id,value} = e.target;
		setRegisterInfo({
			...registerInfo,
			[id] : value
		})
	}
	const handleClick = (e)=>{
		e.preventDefault();
		const {name,username,mobile,email,password,description} = registerInfo;
		if(name!== "" && username!=="" && mobile!=="" && email!=="" && password!=="" && description!==""){
			dispatch(Register_request_function(registerInfo));
		}
		
	}
	return (
	  <Flex
		minH={'100vh'}
		align={'center'}
		justify={'center'}
		bg={useColorModeValue('gray.50', 'gray.800')}>
		<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
		  <Stack align={'center'}>
			<Heading fontSize={'4xl'} textAlign={'center'}>
			  Sign up
			</Heading>
			<Text fontSize={'lg'} color={'gray.600'}>
			  to enjoy all of our cool features ✌️
			</Text>
		  </Stack>
		  <Box
			rounded={'lg'}
			bg={useColorModeValue('white', 'gray.700')}
			boxShadow={'lg'}
			p={8}>
			<Stack spacing={4} onChange={handleChange}>
			  <HStack>
				<Box>
				  <FormControl id="name" isRequired>
					<FormLabel>Fullname</FormLabel>
					<Input type="text" />
				  </FormControl>
				</Box>
				<Box>
				  <FormControl id="username" isRequired>
					<FormLabel>Username</FormLabel>
					<Input type="text" />
				  </FormControl>
				</Box>
			  </HStack>
			  <FormControl id="email" isRequired>
				<FormLabel>Email address</FormLabel>
				<Input type="email" />
			  </FormControl>
			  <FormControl id="password" isRequired>
				<FormLabel>Password</FormLabel>
				<InputGroup>
				  <Input type={showPassword ? 'text' : 'password'} />
				  <InputRightElement h={'full'}>
					<Button
					  variant={'ghost'}
					  onClick={() =>
						setShowPassword((showPassword) => !showPassword)
					}>
					  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
					</Button>
				  </InputRightElement>
				</InputGroup>
			  </FormControl>
			  <FormControl id="mobile" isRequired>
				<FormLabel>Mobile Number</FormLabel>
				<Input type="number" />
			  </FormControl>
			  <FormControl id="description" isRequired>
				<FormLabel>Description</FormLabel>
				<Textarea placeholder='Description' />
			  </FormControl>
			  <Stack spacing={10} pt={2}>
				<Button
				onClick={handleClick}
				  loadingText="Submitting"
				  size="lg"
				  bg={'blue.400'}
				  color={'white'}
				  _hover={{
					  bg: 'blue.500',
					}}>
				  Sign up
				</Button>
			  </Stack>
			  <Stack pt={6}>
				<Text align={'center'}>
				  Already a user? <RouterLink to={"/login"} style={{"color":"blue" , "textDecoration":"underline"}}>Login</RouterLink>
				</Text>
			  </Stack>
			</Stack>
		  </Box>
		</Stack>
	  </Flex>
	);
}

export default Register