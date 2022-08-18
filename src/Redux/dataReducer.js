const init = {
	isLoading : false,
	empleoyees_list : [],
	isError : false,
}

export const DataReducer = (state=init,{type,payload})=>{
switch (type) {
	case "DATA_REQUEST":
		return {...state,isLoading:true};		
	case "DATA_REQUEST_SUCCESS":
		return {...state,isLoading : false, empleoyees_list : payload};
	case "DATA_REQUEST_FAILURE":
		return {...state,isLoading:false, isError : true};
	default:
		return state;
}
}