import { PRICE_DECREASE, PRICE_INCREASE } from "./price.types"

const initState = {
    price:1
}
export const PriceReducer = (state=initState,{type,payload}) =>{

    switch(type){
        case PRICE_INCREASE:{
            return {
                ...state,
                price: payload
            }
        }
        case PRICE_DECREASE:{
            return {
                ...state,
                price: payload
            }
        }
        default:{
            return state
        }
    }
}