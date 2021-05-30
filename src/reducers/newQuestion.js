import * as types from "../actions/types"
export default function newQuestion(state={},action){

    switch (action.type) {
        case types.SAVE_QUESTION:
            let {id,author,optionOne,optionTwo,timestamp}=action
            return {
            ...state,
            [id]:{id,author,optionOne,optionTwo,timestamp}
            }
        default:
            return state
        }
    }