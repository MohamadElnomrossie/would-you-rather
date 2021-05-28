import * as types from './types'
import {_saveQuestion} from "../utils/_DATA"
// export function newQuestion(author,optionOneText,optionTwoText){
//     return{
//         type:types.SAVE_QUESTION,
//         author,
//         optionOneText,
//         optionTwoText
//     }
// }
export function handleNewQuestion(author,optionOneText,optionTwoText){
return (dispatch)=>{
     _saveQuestion({author,optionOneText,optionTwoText}).then(ques=>{
        let{id,optionOne,optionTwo,author,timestamp}=ques
        dispatch({type:types.SAVE_QUESTION,id,optionOne,optionTwo,author,timestamp})
    }).catch(e=>{
        console.log(e)
    })
   

}
}

