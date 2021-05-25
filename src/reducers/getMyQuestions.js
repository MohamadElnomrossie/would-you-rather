import * as types from "../actions/types"
export default function getMyQuestions(state={},action){
       switch (action.type) {
        case types.GET_MY_QUESTIONS:
            return{
                ...state,
                answered:{...action.qids},
                 unanswered:{...action.otherQuestions}
            }    
        default:
            return state;
    }
}