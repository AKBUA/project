import LOGIN_ACTIONS from "./actionTypes";
import axios from "axios";


export function setUserInfo(data){
    return {
        type:LOGIN_ACTIONS.SET_USER_INFO,
        payload:data
    }


}


export  async function  getAllTask(accountId,dispatch){

    await axios({
        method:'post',
        url:'http://localhost:8000/task',
        data:{
            accountId:accountId
        }
        
    }).then((res)=>{
        dispatch({type:LOGIN_ACTIONS.GET_ALL_TASKS,payload:res.data})
    })

    

}