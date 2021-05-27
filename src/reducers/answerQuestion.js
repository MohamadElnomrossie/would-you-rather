import * as types from "../actions/types"

export default function answerQuestion(state={},action){
    switch (action.type) {
        case types.ANSWER_QUESTION:
            let {authedUser,qid,option}=action
            return{
            ...state,
            authedUser,
            qid,
            option
            }
        default:
            return state;
    }
}