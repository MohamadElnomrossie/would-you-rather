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
import ProtectedRoute from "./components/protectedRoute"
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
        <ProtectedRoute path="/leaderboard" component={LeaderBoard}/>
        <ProtectedRoute path="/questions/:id" component={QuestionDetails}></ProtectedRoute>
        <ProtectedRoute path="/add" component={NewQuestion}></ProtectedRoute>
        <ProtectedRoute exact path="/dashboard" component={Dashboard}></ProtectedRoute>
        <Route exact path="/login" component={LoginForm}></Route>
        <ProtectedRoute path="/notfound"component={NotFound}></ProtectedRoute>
        <ProtectedRoute path="*" component={NotFound}></ProtectedRoute>
        <Redirect to="/notfound" />
        <Redirect from="/" to="/dashboard"></Redirect>
      </Switch>
    );
  }
}

export default connect()(App);
