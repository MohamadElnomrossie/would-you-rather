import * as types from "./types"
export default function getMyQuestions(userID,qids=[],otherQuestions=[]){
    console.log("QUIDSSSS",qids)
    return{
        type:types.GET_MY_QUESTIONS,
        userID,
        qids,
        otherQuestions
    }
}