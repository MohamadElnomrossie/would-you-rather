import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./navbar";
import Card from "./card";
import NotFound from "./notfound"
class QuestionDetails extends Component {
  
  getQuestion=()=>{
    let question=Object.values(this.props.questions).filter((e) => {
      return e.id === this.props.match.params.id;
  })
  if (question.length<1){
    return (<NotFound></NotFound>)
  }
  else{
    return (<Card
      target={question}
      displayStats={true}
      history={this.props.history}
      />)
    }
  }
  render() {
    this.getQuestion()
    return (
      <div className="container-fluid px-0">
          <Navbar/>
        <div className="col-8 mx-auto">
            {this.getQuestion()}
            </div>
      </div>
    );
  }
}
function mapStateToProps(state) {

  return state;
}
export default connect(mapStateToProps)(QuestionDetails);
