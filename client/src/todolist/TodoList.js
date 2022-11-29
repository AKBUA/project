import axios, { Axios } from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTask } from '../store/actionCreators';
import ToDoData from '../tododata/ToDoData';
import './ToDoList.css';


export default function Todolist() {
  const userInfo = useSelector(store => store.userInfo);
   const dispatch=useDispatch()
  const handleSubmit =async  (e) => {
    e.preventDefault()
    const task = e.target.task.value
    const accountId = userInfo._id
     await axios.post('http://localhost:8000/tasks', { task: task, accountId }).then((res) => {

    })

    getAllTask(userInfo._id,dispatch);

    
  }




  return (
    <div>
      <h3>To do List</h3>
      <form action="" onSubmit={handleSubmit}>
        <input className='todoform' type="text" name='task' />
        <button className='todoform-button'>+</button>
      </form>

    <ToDoData/>
    </div>
  )
}
