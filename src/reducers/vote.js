import * as types from "../actions/types"
import {_saveQuestionAnswer} from "../utils/_DATA"
export default function voteForAnswer(state={},action){
switch (action.type) {
    case types.VOTE:
        _saveQuestionAnswer({authedUser:action.userID,
        qid:action.questionID,
        answer:action.option
    })
        return{
            ...state,
            quid:action.questionID,
            option:action.option,
            userID:action.userID
        }
    default:
        return state;
}
}