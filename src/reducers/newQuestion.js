import * as types from "../actions/types"
import {_saveQuestion} from "../utils/_DATA"

export default function newQuestion(state={},action){
    console.log("new ============")
    switch (action.type) {
        case types.SAVE_QUESTION:
            return _saveQuestion({author:action.author,
            optionOne:action.optionOne,
        optionTwo:action.optionTwo}).then(question=>{
            return {
                ...state,
                newQuestion:question
            }
      
    })
        default:
            return state
        }
    }