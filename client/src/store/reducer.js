import LOGIN_ACTIONS from "./actionTypes"


 export default function loginRuducer(state={welcome:'Welcome to Store! Get every state here ',userInfo:null,task:[]},action){

    switch(action.type){
     

      case LOGIN_ACTIONS.SET_USER_INFO:
        return {
          ...state,
          userInfo:action.payload

      }
      case LOGIN_ACTIONS.GET_ALL_TASKS:
        return {
    ...state,task:action.payload
      }
      default:
        return {
            ...state
        }


    }

}