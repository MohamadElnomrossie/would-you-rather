import React,{Component} from 'react';
import {connect} from "react-redux"
import Navbar from  "./navbar"
class LeaderBoard extends Component{
    leaderBoard=()=>{
        let c=Object.values(this.props.users).sort((a,b)=>{
         return (Object.keys(b.answers).length+b.questions.length)-(Object.keys(a.answers).length+a.questions.length)
        })
        return c
      }  
    render(){
   
      return(
        <div className="container-fluid px-0">
          <Navbar history={this.props.history}/>
          <div className="col-6 mx-auto">
          {this.leaderBoard().map(entry=>{
          
            return (<div class="card mb-3 col-12">
            <div className="row g-0">
              <div className="col-md-4">
                <img className='card-img' src={entry.avatarURL} alt={entry.name}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{entry.name}</h5>   
                  <p className="card-text"><small className="text-muted">Questions answered: {Object.keys(entry.answers).length}</small></p>
                  <p className="card-text"><small className="text-muted">Questions created: {entry.questions.length}</small></p>
                  <p className="card-text"><small className="text-muted">Total questions: {Object.keys(entry.answers).length+entry.questions.length}</small></p>
                </div>
              </div>
            </div>
          </div>)
              
              
            })}
            </div>
        </div>
)}



      }

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(LeaderBoard)