import axios from "axios";
import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, PROFILE_USER_REQUEST, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionTypes";



// Login Request Function
export const Login_request_function = (params)=>(dispatch)=>{
	dispatch({type : LOGIN_USER_REQUEST});
	localStorage.setItem("user_name",JSON.stringify(params.username))
	axios.post("https://masai-api-mocker.herokuapp.com/auth/login",params)
	.then((res)=> {
		dispatch({type : LOGIN_USER_SUCCESS,payload : res.data.token})
		localStorage.setItem("user_profile_token",JSON.stringify({token : res.data.token, isAuth : true}))
	})
	.then(()=> console.log(JSON.parse(localStorage.getItem("user_profile_token"))))
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
export const Data_request_function = ()=>(dispatch)=>{
	dispatch({type : "DATA_REQUEST"});
	axios.get("https://mock8-coding-server.herokuapp.com/api/employees_list")
	.then((res)=> {
		dispatch({type : "DATA_REQUEST_SUCCESS",payload : res.data})
	})
	.catch((error)=> dispatch({type :"DATA_REQUEST_FAILURE"}));
}



// Delete user Profile function
export const Data_delete_request_function = (id)=>(dispatch)=>{
	
	axios.delete(`https://mock8-coding-server.herokuapp.com/api/employees_list/${id}`)
	.then((res)=> {
		console.log(res.data);
		
	}).then(()=> Data_request_function(dispatch))
	.catch((error)=> console.log(error));
}


// Making Post request for new User Data 

export const Post_Request_user = (params)=>(dispatch)=>{
	axios.post('https://mock8-coding-server.herokuapp.com/api/employees_list',params)
	.then(()=> Data_request_function(dispatch))
	.catch((error)=> console.log(error));
}

// Update user Info netword request.
export const Update_Request_user = (params,id)=> (dispatch)=> {
	axios.patch(`https://mock8-coding-server.herokuapp.com/api/employees_list/${id}`,params)
	.then((res)=> {
		console.log(res.data);
		
	}).then(()=> Data_request_function(dispatch))
	.catch((error)=> console.log(error));
}