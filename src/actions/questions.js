import * as types from "./types"
export function getQuestions(questions){
return {
    type:types.GET_QUESTIONS,
    questions}
}
