import React, { Component } from 'react';
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import login from "../actions/login"
class LoginForm extends Component{
state={username:""}
history=""
 handleChange=(e)=>{
     e.preventDefault()
     this.setState({username:e.target.value})
     
 }
 componentDidMount(){
   console.log(this.props)
 }
 
 login=(e)=>{
     e.preventDefault()
     let user=this.props.users[this.state.username]
     if(user!==undefined){
          this.props.login(login(this.state.username))
          if(this.props.location.state){
            this.props.history.push(this.props.location.state.from.pathname)
        }
        else{
            this.props.history.push("/")
        }
      }      
          }          
      users=()=>{
          return Object.values(this.props.users)
      }
render(){
    return(
        <div>
            {!this.props.login.login&&(
        <div className='col-4 mx-auto text-center'>
            <h1>Login</h1>
            <form onSubmit={(e)=>this.login(e)} className="mx-2" >
                <div className="input-group mb-3">
                    {/* <input type="text" value={this.state.username} onChange={(e)=>this.handleChange(e)} className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/> */}
                   
                    <select className="form-select" defaultValue='none' onChange={(e)=>this.handleChange(e)} aria-label="Default select example">
                    <option disabled value="none">Select a username</option>
                        {this.users().map((entry)=>
                            <option key={entry.id} value={entry.id}>{entry.name}</option>
                        )}
                    </select>
                    <button className="btn btn-outline-secondary" type="button" onClick={this.login} id="button-addon2">Log in</button>
                </div>
            </form>
        </div>
            )}
        {this.props.login.login &&(
            <Redirect to="/"></Redirect>)}
                </div>
            )
}
}
function mapStateToProps(state){
    return {...state}
}
function mapDispatchToProps(dispatch){
    return{
        login:(dict)=>dispatch(dict),
        getMy: (dict) => dispatch(dict),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
