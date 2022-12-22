import { LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAIL } from "./auth.types"

let token = localStorage.getItem("token")
const initState = {
    isAuth :false,
    isError :false,
    token:token
}
export const authReducer = (state=initState,{type,payload}) =>{

        switch(type){

        case LOGIN_REQUEST:{
            return {
                ...state,
                isAuth :false,
                isError:false,
                token:""
            }
        }
        case LOGIN_SUCCESS:{
              localStorage.setItem("token ",payload)
            return {
                ...state,
                isAuth:true,
                isError:false,
                token:state.payload
            }
        }
        case LOGIN_FAIL:{
            return {
                ...state,
                isAuth:false,
                isError:true,
                token:""
            }
        }
            default:{
                return state
            }
        }
}