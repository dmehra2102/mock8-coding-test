import axios from "axios";
import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, PROFILE_USER_REQUEST, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionTypes";

// Login Request Function
export const Login_request_function = (params)=>(dispatch)=>{
	dispatch({type : LOGIN_USER_REQUEST});
	localStorage.setItem("user_name",JSON.stringify(params.username))
	axios.post("https://masai-api-mocker.herokuapp.com/auth/login",params)
	.then((res)=> {
		dispatch({type : LOGIN_USER_SUCCESS})
		localStorage.setItem("user_profile_token",JSON.stringify({token : res.data.token, isAuth : true}))
	})
	.then(()=> console.log("login successfull"))
	.catch((error)=> dispatch({type : LOGIN_USER_FAILURE, payload : error.message}))
}

// Register Request Function
export const Register_request_function = (params)=>(dispatch)=>{
	dispatch({type : REGISTER_USER_REQUEST});
	axios.post("https://masai-api-mocker.herokuapp.com/auth/register",params)
	.then((res)=> dispatch({type : REGISTER_USER_SUCCESS}))
	.then(()=> console.log("Registration successfull"))
	.catch((error)=> dispatch({type : REGISTER_USER_FAILURE, payload : error.message}))
}

// Profile request Function
export const Profile_request_function = (params)=>(dispatch)=>{
	dispatch({type : PROFILE_USER_REQUEST});
	axios.get(`https://masai-api-mocker.herokuapp.com/user/${params.username}`,{
		headers : { "Authorization" : `Bearer ${params.token}`}
	})
	.then((res)=> localStorage.setItem("user_details",JSON.stringify(res.data)))
	.catch((error)=> console.log(error))
}

// Data Fetching Request
