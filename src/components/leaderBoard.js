import React,{Component} from 'react';
import {connect} from "react-redux"
import Card from "./card";
import Navbar from  "./navbar"
import {Redirect} from "react-router-dom"
class LeaderBoard extends Component{
    leaderBoard=()=>{
        let c=Object.values(this.props.questions).sort((a,b)=>{
         return (a.optionOne.votes.length+a.optionOne.votes.length)-(b.optionOne.votes.length+b.optionOne.votes.length)
        })
        return c
      }
      checkUser=()=>{
        if (this.props.login.login===undefined){
          return true
        }
        else{
          return false
        } }
    render(){    
 return(
     <div className="container-fluid px-0">
         {this.checkUser()===true && (<Redirect to="/login"></Redirect>)}
         <Navbar history={this.props.history}/>
         <div className='col-8 mx-auto'>
         <h1 className="fs-2 text-center">Leader board</h1>
        <Card target={this.leaderBoard()}
        displayStats={true}
        history={this.props.history}/>
             
         </div>
     </div>
 )}
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(LeaderBoard)