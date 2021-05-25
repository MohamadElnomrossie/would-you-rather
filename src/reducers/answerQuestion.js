import * as types from "../actions/types"

export default function answerQuestion(state={},action){
    switch (action.type) {
        case types.ANSWER_QUESTION:
            let {authedUser,qid,answer}=action

            return{
            ...state,
            qid,
            authedUser,
            answer   
            }
    
        default:
            return state;
    }
}