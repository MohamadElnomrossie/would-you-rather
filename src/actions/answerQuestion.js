import * as types from "./types"

export default function answer(authedUser,qid,answer){
    return{
        type:types.ANSWER_QUESTION,
        qid,
        answer,
        authedUser
    }
}