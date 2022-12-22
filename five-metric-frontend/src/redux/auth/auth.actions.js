import { LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAIL } from "./auth.types"
export const login = (creds) =>async(dispatch) =>{

        dispatch({type:LOGIN_REQUEST})

        try{

            const res =await axios.post("https://five-metric.onrender.com/login",creds)
            
            dispatch({type:LOGIN_SUCCESS,payload:res.data}) 
        }
        catch(err) {
            dispatch({type:LOGIN_FAIL,payload:err.message})
        }
}