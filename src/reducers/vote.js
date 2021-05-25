import * as types from "../actions/types"
import vote from "../actions/vote"
import _saveQuestionAnswer from "../utils/_DATA"
export default function vote(state={},action){
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
        break;

    default:
        return state;
}
}