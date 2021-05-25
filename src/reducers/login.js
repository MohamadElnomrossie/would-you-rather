import * as types from "../actions/types"

export default function login(state={},action){
    switch (action.type) {
        case types.LOGIN:
            return{
                ...state,
                login:action.userID
            }    
        default:
            return state
    }
}