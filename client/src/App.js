import logo from './logo.svg';
import './App.css';
import Nan from './Nav';
import Home from './Home';
import Login from './Login';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import TodoList from './todolist/TodoList';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
function App() {
  const userInfo= useSelector(store=>store.userInfo);
  const navigate = useNavigate();
 
  useEffect(()=>{ 

     if(!userInfo){
       navigate('/')
     }

  },[userInfo])

  return (
    <div className="App">
    <Nan/>

    <Routes>
       <Route path ='/' element={ <Home/>}></Route> 
       <Route path ='/login' element={ <Login/>}></Route> 
       <Route path ='/singup' element={ <SignUp/>}></Route>   
    {/*<Route path ='/todo' element={ <Todo/>}></Route> */}

    <Route path ='/todo' element={ <TodoList/>}></Route>   
    </Routes>
    </div>
  );
}

export default App;
