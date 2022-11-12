import { getUserData, addEntry, addTask, delEntry, delTask, changeEntryStat, changeTaskStat } from "./userDataActionTypes";

let initState = {
    teamName:"",
    entries:[]
}

const userDataReducer = (state=initState, {type, payload}) => {
    switch(type){
        case getUserData:{
            return {
                ...state,
                ...payload
            }
        }
        case (addEntry):{
            return {
                ...state,
                ...payload
            }
        }
        case (addTask):{
            return {
                ...state,
                ...payload
            }
        }
        case (delEntry):{
            return {
                ...state,
                ...payload
            }
        }
        case (delTask):{
            return {
                ...state, 
                ...payload
            }
        }

        case(changeTaskStat):{
            return {
                ...state, 
                ...payload
            }
        }
        case (changeEntryStat):{
            return {
                ...state, 
                ...payload
            }
        }
        default:{
            return state
        }
    }
}

export {userDataReducer}