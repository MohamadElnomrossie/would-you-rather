import {combineReducers} from 'redux'
import questions from "./questions"
import users from "./users"
import login from "./login"
import logout from "./logout"
import answerQuestion from "./answerQuestion"
import getMyQuestions from "./getMyQuestions"
import newQuestion from "./newQuestion"
export default combineReducers({
    questions,
    users,
    login,
    answerQuestion,
    getMyQuestions,
    newQuestion,
    logout
})