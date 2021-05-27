import {getQuestions} from "./questions"
import {getUsers} from "./users"
import {_getQuestions,_getUsers} from "../utils/_DATA"
export default function initialData(){
    return (dispatch)=>{
        _getUsers().then(
            users=>{
                dispatch(getUsers(users))
            }
        )
        _getQuestions().then(
            questions=>{
                dispatch(getQuestions(questions))
            }
        )
    }
}