import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from "./navbar"
import * as quest from '../actions/newQuestion'
class NewQuestion extends Component{
    state={optionOne:"",
optionTwo:""}
 componentDidMount(){
    
 }
        handleSubmit= (e)=>{
            e.preventDefault()
            let optionOneText=this.state.optionOne
            let optionTwoText=this.state.optionTwo
            let author=this.props.login.login
            this.props.saveQuestion(quest.handleNewQuestion(author,optionOneText,optionTwoText))
            let id=Object.keys(this.props.newQuestion)[0]
            if (id)
            {this.props.questions[id]=Object.values(this.props.newQuestion)[0]}
            this.props.history.push("/")
           
        }
        handleChange=(e)=>{
            e.preventDefault()
            this.setState({[e.target.id]:e.target.value})
        }
render(){
    return(
        <div className="container-fluid p-0">
            <Navbar/>
        
                <div className="mx-auto col-6 mt-4">
            <h1 className="mb-4">Would you rather</h1>
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <div className="mb-3">
                <label htmlFor="optionOne" className="form-label">First Option</label>
                <input type="text" name='optionOne' onChange={(e)=>this.handleChange(e)} value={this.state.optionOne} className="form-control" id="optionOne" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                <label htmlFor="optionTwo" className="form-label">Second Option</label>
                    <input type="text" name='optionTwo' onChange={(e)=>this.handleChange(e)} value={this.state.optionTwo} className="form-control" id="optionTwo"/>
                </div>
            <button type="submit" className="btn btn-primary mx-auto">Save</button>
            </form>
            </div>
               
        </div>
    )
}
}
function mapStateToProps(state){
    return state
}
function mapDispatchToProps(dispatch) {
    return{
        saveQuestion:(dict)=>dispatch(dict)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewQuestion)