import * as types from "../actions/types"

export default function logout(state={},action){
    switch (action.type) {
        case types.LOGOUT:
            return{
                ...state,
                login:{},
            }
    
        default:
            return state;
    }
}