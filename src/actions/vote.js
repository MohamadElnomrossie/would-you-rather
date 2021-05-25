import * as types from "./types"
export default function vote(questionID,option,userID){
return{
    type:types.VOTE,
    questionID,
    option,
    userID

}
}