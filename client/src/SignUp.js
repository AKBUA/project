import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
   
  const navigate = useNavigate();
  const handleSubmit= async (e)=>{
  e.preventDefault();
   
  const username=e.target.username.value;
  const email=e.target.email.value;
  const password=e.target.password.value;

 await axios.post("http://localhost:8000/accounts",{username,email,password}).then((res=>{
  console.log(res.data,'USER')
}));

navigate('/login')

   
  }




  return (
    <div>
     <form  onSubmit={handleSubmit}  autoComplete="off">
     
     <div className='label'>
     <label htmlFor="username">UserName:</label>
     <input type="text" name='username' placeholder='Enter your username' required />
  </div>
     
    <div className='label'>
    <label htmlFor="email">email:</label>
    <input type="email" name='email'  placeholder='Enter your email' required/></div>

    <div className='label'>
    <label htmlFor="password">Password:</label>
    <input type="password" name='password' placeholder='Enter password' required />
    </div>
      
    <button style={{marginTop:'10px'}}>Submit</button>
     </form>
    
    
    </div>
  )
}
