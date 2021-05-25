import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./navbar";
import Card from "./card";
import {Link,Redirect} from "react-router-dom"
class QuestionDetails extends Component {
  getData = () => {
    let { author, optionOne, optionTwo, timestamp } = Object.values(
      this.props.questions
    ).filter((e) => {
      return e.id === this.props.match.params.id;
    })[0];

    let { name, avatarURL } = this.props.users[author];

    return {
      author,
      optionOne,
      optionTwo,
      author,
      timestamp,
      name,
      avatarURL,
    };
  };
  checkUser=()=>{
    if (this.props.login.login===undefined){
      return true
    }
    else{
      return false
    } }
  render() {
    return (
      <div className="container-fluid px-0">
        {this.checkUser()===true && (<Redirect to="/login"></Redirect>)}
          <Navbar/>
        <div className="col-8 mx-auto">
        <Card
            target={Object.values(this.props.questions).filter((e) => {
                return e.id === this.props.match.params.id;
            })}
            displayStats={true}
            history={this.props.history}
            />
            </div>
            <Link to="/"><button className="btn btn-primary mx-3">Back</button></Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(QuestionDetails);
