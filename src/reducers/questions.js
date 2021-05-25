import * as types from "../actions/types"

export default function questions(state={},action){
    switch (action.type) {
        case types.GET_QUESTIONS:
            return{
                ...state,
                ...action.questions,
            }    
        default:
            return state;
    }
}
