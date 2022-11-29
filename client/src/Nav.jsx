import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUserInfo } from './store/actionCreators';
export default function Nan() {
const dispatch=useDispatch();
  const userInfo= useSelector(store=>store.userInfo);
const handleLogOut=()=>{
  dispatch(setUserInfo(null));
}


  return (
    <div className='nav'>
     <p><Link to ="/"> To Do</Link></p>
     <ul>
    {!userInfo?<li><Link to ="/singup"><button>{"Sing Up"}</button></Link></li>:null}
    {userInfo? 
    <li><Link to ="/"><button onClick={handleLogOut}>{"Log Out "}</button></Link></li>
    :

    <li><Link to ="/login"><button >{"Login"}</button></Link></li>}
     </ul>
    
    </div>
  )
}
