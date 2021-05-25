import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./card";
import getMyQuestions from "../actions/getMyQuestions";
import Navbar from "./navbar";
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
  // if (this.props.questions !== undefined ||Object.entries(this.props.questions).length <= 1 ||
  //   this.props.questions !== {}) {
    // try {
      quest=()=>Object.values(this.props.questions).filter(e=>{
        return (e.optionOne.votes.includes(this.props.login.login)||e.optionTwo.votes.includes(this.props.login.login))
      })
      other=()=>Object.values(this.props.questions).filter(e=>{
        return !e.optionOne.votes.includes(this.props.login.login)&&!e.optionTwo.votes.includes(this.props.login.login)
      })
     get=()=>{
       this.props.getMy(getMyQuestions(this.props.login.login, this.quest(),this.other()));
     }
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
 
  componentDidMount() {this.get()
}
  render() {
    return (
      <div className="container-fluid px-0">
        {this.checkUser()===true && (<Redirect to="/login"></Redirect>)}
        {this.checkUser()===false&& <Redirect to="/"></Redirect>}
        <Navbar history={this.props.history} />
        <div className="col-6 mx-auto">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Answered Questions</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Unanswered questions</button>
  </li>  
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <h1>Answered Questions</h1><Card target={this.props.getMyQuestions.answered}  history={this.props.history}/> </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <h1>Unnswered Questions</h1><Card target={this.props.getMyQuestions.unanswered}  history={this.props.history} vote={true}/></div><div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Card target={this.props.getMyQuestions.unanswered} /></div>
</div>
      </div>
</div>
    );
  }
}
function matStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    getMy: (dict) => dispatch(dict),
  };
}
export default connect(matStateToProps, mapDispatchToProps)(Dashboard);
