import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Profile_request_function } from '../Redux/action';


const Homepage = () => {
	const dispatch = useDispatch();
	const username = JSON.parse(localStorage.getItem("user_name"));
	const {token} = JSON.parse(localStorage.getItem("user_profile_token"))
	useEffect(()=>{
		const params = {
			username,
			token
		}
		dispatch(Profile_request_function(params))
	},[])
  return (
	<div>Homepage</div>
  )
}

export default Homepage