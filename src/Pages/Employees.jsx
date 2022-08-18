import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Data_delete_request_function, Data_request_function } from "../Redux/action";
import { Box,Button,Flex } from "@chakra-ui/react";
import "../App.css";
import { useNavigate } from "react-router";

const Employees = () => {
      const dispatch = useDispatch();
	  const navigate = useNavigate();
      const { empleoyees_list } = useSelector((state) => state.DataReducer);

	//   Navigate to create New Profile Page
	  const handleNewEmployee = ()=>{
		navigate("/employees/create")
	  }
	//   Navigate to view Individual Profile
	  const handleViewProfile = (id)=>{
		navigate(`/employees/${id}`);
	  }

	//   Navigate to the edit page
	  const handleEditProfile = (id)=>{
		navigate(`/employees/${id}/edit`)
	  }

	//   Delete the Profile
	  const handleDelete = (id)=>{
		dispatch(Data_delete_request_function(id))
	  }

	//   Fetching Data with dependency that whenever data changes make network request.
      useEffect(() => {
            dispatch(Data_request_function(dispatch));
      }, [empleoyees_list]);
      return (
            <Box m={"auto"} mt="5vh" w={"80vw"}>
				<Flex m="1em 0"><Button onClick={handleNewEmployee}>Add New Employee</Button></Flex>
                  <table>
                        <thead>
                              <tr className="table-row" id="table-head-row">
                                    <th>S.No.</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Salary</th>
									<th>View</th>
									<th>Delete</th>
									<th>Edit</th>
                              </tr>
                        </thead>
                        <tbody>
                              {empleoyees_list.map((item,index) => {
                                    return <tr key={item.id} className="table-row">
										<td>{index+1}.</td>
										<td>{item.name}</td>
										<td>{item.age}</td>
										<td>{item.gender}</td>
										<td>{item.department}</td>
										<td>{item.salary}</td>
										<td><Button onClick={()=> handleViewProfile(item.id)}>View</Button></td>
										<td><Button onClick={()=> handleDelete(item.id)}>Delete</Button></td>
										<td><Button onClick={()=> handleEditProfile(item.id)}>Edit</Button></td>
									</tr>
                              })}
                        </tbody>
                  </table>
            </Box>
      );
};

export default Employees;
