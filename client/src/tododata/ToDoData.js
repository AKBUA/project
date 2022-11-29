import axios, { Axios } from 'axios'
import React from 'react'
import './ToDoData.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTask, setUserInfo } from '../store/actionCreators'
import { useEffect } from 'react'
import { useState } from 'react'
export default function ToDoData() {

    const dispatch = useDispatch()
    // const [data,setData]=useState([])
    const userInfo = useSelector(store => store?.userInfo);
    const task = useSelector(store => store.task);
    const [selected,setSelected]=useState({_id:-1});
    const [value,setValue]=useState('');
    
    useEffect(() => {
        getAllTask(userInfo._id, dispatch);

    }, [])


    const deleteHandler = async (e) => {

        // axios.delete('http://localhost:8000/task',{taskId:e._id}).then((res)=>{
        //     console.log(res)
        // })
        await axios({
            url: 'http://localhost:8000/task',
            method: 'delete',
            data: { taskId: e._id }
        })
        getAllTask(userInfo._id, dispatch);
    }

    //   console.log(data,'data')
const editHandler=(e)=>{
  setSelected(e);
   setValue(e.task);

}

const handleSave =async (e)=>{
      await  axios({
        url:'http://localhost:8000/task',
        method:'put',
        data:{
            updatedTask:value,
            taskId:e._id
        }
      });

      setSelected({_id:-1});
      getAllTask(userInfo._id,dispatch);
}

const handleChnage=(e)=>{
        setValue(e.target.value);
}
    return (

        <div>
          
            List
            {


                task.map((e, i) => {


                    return (
                     
                (selected?._id!=e._id?<div> <p className='lists' key={i}>{e.task} 
                 <button 
                onClick={()=>editHandler(e)}>Edit</button><button onClick={() => { deleteHandler(e) }}>Delete</button></p></div>:
                <div> <input type="text" value={value} onChange={handleChnage} /><button 
                onClick={()=>handleSave(e)}>Save</button></div>)


                    )

                })


            }
        </div>
    )
}


