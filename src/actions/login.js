import * as types from "./types"
export default function login(userID){
    return{
        type:types.LOGIN,
        userID
    }
}