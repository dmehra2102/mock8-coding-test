import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./actionTypes";

const {token,isAuth} = JSON.parse(localStorage.getItem("user_profile_token"))
const init = {
	isLoading : false,
	isAuth : false || {isAuth},
	success_message : "",
	isAuthError : false,
	isAlreadyRegistered : false,
	isRegisterationError : false,
	error_message : "",
	token : null
}

console.log(token,isAuth)

export const AuthReducer = (state=init , {type,payload})=> {
	switch (type) {
		case LOGIN_USER_REQUEST:
			return {...state ,isLoading : true };
		case LOGIN_USER_SUCCESS : 
		    return {...state,isLoading : false,isAuth : {isAuth},token : {token}, error_message : ""};
		case LOGIN_USER_FAILURE:
			return {...state,isLoading : true,isAuthError : true, error_message : "Invalid login creadentials"};	
		case REGISTER_USER_REQUEST:
			return {...state, isLoading : true};
		case REGISTER_USER_SUCCESS:
			return {...state,isLoading : false, success_message : "Registration Success",isAlreadyRegistered : true};
		case REGISTER_USER_FAILURE:
			return {...state, isLoading : false,isRegisterationError :true, error_message : "Registration failed, user already exists"}
		default:
			return state;
	}
}