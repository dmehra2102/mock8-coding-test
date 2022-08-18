// import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
  const {isAuth} = useSelector((state)=> state.AuthReducer);
  console.log(isAuth);
  if(isAuth){
	return children
  }
  else{
	  return <Navigate to={"/login"} />
  }
}

export default PrivateRouter