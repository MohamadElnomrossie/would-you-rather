import * as types from './types'

export default function newQuestion(author,optionOne,optionTwo){
    return{
        type:types.SAVE_QUESTION,
        author,
        optionOne,
        optionTwo
    }
}