import { getUserData, addEntry, addTask, delEntry, delTask, changeEntryStat, changeTaskStat } from "./userDataActionTypes";
import axios from 'axios'

const dataGetter = (token) => async (dispatch) => {
    try {
        let res = await axios.post("https://tender-hen-suspenders.cyclic.app/data", token)
        let data = await res.data
        return dispatch({
            type:getUserData,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

const entryAdder = (inData) => async (dispatch) => {
    try {
        let res = await axios.post("https://tender-hen-suspenders.cyclic.app/addEntry", inData)
        let data = await res.data
        return dispatch({
            type: addEntry,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

const taskAdder = (inData) => async (dispatch) => {
    try {
        let res = await axios.post("https://tender-hen-suspenders.cyclic.app/addTask", inData)
        console.log(res)
        let data = await res.data
        return dispatch({
            type:addTask,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

const entryDeleter = (inData) => async (dispatach) => {
    try {
        let res = await axios.post("https://tender-hen-suspenders.cyclic.app/deleteEntry", inData)
        let data = await res.data

        return dispatach({
            type:delEntry,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

const taskDeleter = (inData) => async (dispatach) => {
    try {
        let res = await axios.post("https://tender-hen-suspenders.cyclic.app/deleteTask", inData)
        let data = await res.data

        return dispatach({
            type:delTask,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

const entryChanger = (inData) => async (dispatch) => {
    try {
        let res = await axios.post("https://tender-hen-suspenders.cyclic.app/entry", inData)
        let data = await res.data

        return dispatch({
            type:changeEntryStat,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

const taskChanger = (inData) => async (dispatch) => {
    try {
        let res = await axios.post("https://tender-hen-suspenders.cyclic.app/task", inData)
        let data = await res.data

        return dispatch({
            type:changeTaskStat,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export {dataGetter, entryAdder, taskAdder, entryDeleter, taskDeleter, entryChanger, taskChanger}