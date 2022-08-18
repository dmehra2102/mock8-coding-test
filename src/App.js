import { Route , Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import EditPage from './Pages/EditPage';
import Employees from './Pages/Employees';
import EmployeesCreate from './Pages/EmployeesCreate';
import Homepage from './Pages/Homepage';
import IndividualEmployee from './Pages/IndividualEmployee';
import Login from './Pages/Login';
import PrivateRouter from './Pages/PrivateRouter';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
		<Navbar />
      <Routes>
		<Route path='/' element={<PrivateRouter><Homepage /></PrivateRouter>}></Route>
		<Route path='/login' element={<Login />}></Route>
		<Route path='/register' element={<Register />}></Route>
		<Route path='/employees' element={<Employees />}></Route>
		<Route path='/employees/create' element={<EmployeesCreate />}></Route>
		<Route path='/employees/:id' element={<IndividualEmployee />}></Route>
		<Route path='/employees/:id/edit' element={<EditPage />}></Route>
	  </Routes>
    </div>
  );
}

export default App;
