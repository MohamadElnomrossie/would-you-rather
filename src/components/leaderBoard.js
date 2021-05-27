import React,{Component} from 'react';
import {connect} from "react-redux"
import Card from "./card";
import Navbar from  "./navbar"
import {Link} from "react-router-dom"
class LeaderBoard extends Component{
    leaderBoard=()=>{
        let c=Object.values(this.props.questions).sort((a,b)=>{
         return (a.optionOne.votes.length+a.optionOne.votes.length)-(b.optionOne.votes.length+b.optionOne.votes.length)
        })
        return c
      }
      checkUser=()=>{
        if (!Object.keys(this.props.login).includes("login")){
            console.log("checking",this.props)
          return true
        }
        else{
          return false
        } }
    render(){    
 return(
     <div className="container-fluid px-0">
         <Navbar history={this.props.history}/>
    
         <div className='col-8 mx-auto'>
         <h1 className="fs-2 text-center">Leader board</h1>
        <Card target={this.leaderBoard()}
        displayStats={true}
        history={this.props.history}/>  
         </div>

             <div className='col-6 mx-auto'>
             <h1>You must login first</h1>
             <Link className='btn btn-primary' to="/login">Login</Link>
             </div>
     </div>
 )}
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(LeaderBoard)