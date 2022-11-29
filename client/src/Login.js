import React from 'react'
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setUserInfo } from './store/actionCreators';
export default function Login() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleSumbit= async (e)=>{
    
    e.preventDefault();
   
  
    const email=e.target.email.value;
    const password=e.target.password.value;
  
    console.log(email,password,"OKKK")
   await axios.post("http://localhost:8000/accounts/login",{email,password}).then((res=>{
    console.log(res)
  
   if(res.status==200){
    navigate('/todo');
    dispatch(setUserInfo(res.data));
  

    // window.localStorage.setItem('userData',JSON.stringify(res.data));
    // JSON.parse(window.localStorage.getItem('userData'));
   }else{
    navigate('/login')
   }
   
   
  }));
  }

  return (
    <div className='form'>
    <form   onSubmit={handleSumbit}>
   

    
    <div className='label' >
    <label htmlFor="username">email:</label>
    <input type="email" name='email' placeholder='Enter your email'/>
    </div>
    <div className='label'>
    <label htmlFor="password">Password:</label>
    <input type="password" name='password' placeholder='enter password' />
    </div>
     <button style={{marginTop:'10px'}}>Login</button> 
    </form>
    
    
    </div>
  )
}
