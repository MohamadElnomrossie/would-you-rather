import React, { Component } from "react";
import { connect } from "react-redux";
import initialData from "./actions/shared";
import LoginForm from "./components/login";
import Dashboard from "./components/dashboard";
import LeaderBoard from "./components/leaderBoard";
import QuestionDetails from "./components/questionDetails";
import {Redirect, Route,Switch } from "react-router-dom";
import NewQuestion from './components/newQuestion'
import NotFound from "./components/notfound"
class App extends Component {
  componentDidMount() {
    this.props.dispatch(initialData());
  }
  checkUser=()=>{
    if (this.props.login.login===undefined){
      
      return true
    }
    else{
      return false
    }
  }
  render() {
    return (
      <Switch>
        <Route path="/leaderboard" component={LeaderBoard}></Route>
        <Route path="/questions/:id" component={QuestionDetails}></Route>
        <Route path="/login" component={LoginForm}></Route>
        <Route path="/newquestion" component={NewQuestion}></Route>
        <Route path="/notfound"component={NotFound}></Route>
        <Route exact path="/" component={Dashboard}></Route>
        <Redirect to="/notfound" />
      </Switch>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(App);
