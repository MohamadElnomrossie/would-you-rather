import React, { Component } from 'react';
import * as types from "../actions/types"
import {connect} from 'react-redux'
import voteForAnswer from "../actions/vote"
class Card extends Component{
   formateDate=(date)=>{
       let m=new Date(date)
       return m.toLocaleString()
   }
   handleClick=(e)=>{
       let id=e.target.id
     
   this.props.history.push(`/questions/${id}`)
   }
   vote=(e)=>{
    if(this.props.vote===true){
        this.props.AnswerVote({type:types.ANSWER_QUESTION,qid:e.target.id,option:e.target.name,authedUser:this.props.login.login})
    }
   }
    render(){
            const questions=()=>{
            let questions=[]
            for (let entry in this.props.target) {
                questions.push(this.props.target[entry])
                }
            questions=questions.sort((a,b)=>{
                return b.timestamp-a.timestamp
            })
            return questions.map(entry=>
                <div className="card col-12 m-2" key={entry.id} id={entry.id} onClick={(e)=>this.handleClick(e)}>
                        <div id={entry.id} className="card-body">
                            <img className="avatar ms-2" id={entry.id} src={this.props.users[entry.author].avatarURL} alt={entry.name}></img>
                            <p className='text-muted fs-6 d-inline'>{this.props.users[entry.author].name}</p>
                            {this.props.displayStats!==true&&(
                            <div id={entry.id}>
                            <div className="" id={entry.id}>
                            {this.props.vote===false&&(<div className="form-check" id={entry.id}>
                                    <input disabled className="form-check-input" type='radio' id='optionOne' onChange={()=>{}} checked={entry.optionOne.votes.includes(this.props.login.login)}/>
                                    <label id={entry.id} className="form-check-label" htmlFor="optionOne" >{entry.optionOne.text}</label><br />
                                    <input disabled className="form-check-input" type='radio' id='optionTwo' onChange={()=>{}} checked={entry.optionTwo.votes.includes(this.props.login.login)}/>
                                    <label id={entry.id} className="form-check-label" htmlFor="optionTwo"  >{entry.optionTwo.text}</label>
                                </div>)}
                            {this.props.vote===true&&(
                                <div>
                                    <button onClick={(e)=>this.vote(e)} name='optionOne' id={entry.id} className="btn btn-primary col-12 m-2 align-middle">{entry.optionOne.text}</button>
                                    <br />
                                    <button onClick={(e)=>this.vote(e)} name='optionTwo' id={entry.id} className="btn btn-primary m-2 col-12 align-middle" >{entry.optionTwo.text}</button>                               
                                </div>
                            )}   
                            </div>
                            
                            </div>
                            )}

                            {this.props.displayStats===true&&(
                                 <div className='d-flex-row text-left ps-2'>
                                 <p className="fs-4 d-inline ms-2">{entry.optionOne.text}</p>
                                 <div className="progress">
                                 <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{width: (entry.optionOne.votes.length/(entry.optionOne.votes.length+entry.optionTwo.votes.length))*100+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                     {(entry.optionOne.votes.length/(entry.optionOne.votes.length+entry.optionTwo.votes.length))*100}%%&nbsp;
                                     &nbsp;{entry.optionOne.votes.length}&nbsp;vote(s)
                                 </div>
                                 </div>
                                 <br />
                                 <p className="fs-4 d-block ms-2">{entry.optionTwo.text}</p>
                                 <div className="progress">
                                 <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: (entry.optionTwo.votes.length/(entry.optionOne.votes.length+entry.optionTwo.votes.length))*100+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                     {(entry.optionTwo.votes.length/(entry.optionOne.votes.length+entry.optionTwo.votes.length))*100}%&nbsp;
                                     &nbsp;{entry.optionTwo.votes.length}&nbsp;vote(s)
                                 </div>
                             </div>
                             </div>
                            )}
                            <br/><br/>
                            <div className=' container-fluid d-flex flex-row justify-content-between'id={entry.id}>
                            <p id={entry.id} className='text-muted fs-6 text-start'>times answered: {entry.optionOne.votes.length+entry.optionTwo.votes.length}</p>
                            <p id={entry.id}className='text-muted fs-6 text-end'>Date Created {this.formateDate(entry.timestamp)}</p>
                            </div>
                        </div>
                        </div>
                    
                    )
            }
        return(
            <div className=' container-fluid row mx-auto d-flex'>
               {questions()}
               </div>

          
        )
    }
}
function mapStateToProps(state){
    return state
  }
  function mapDispatchToProps(dispatch){
      return{
          AnswerVote: (dict)=>dispatch(dict)
      }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Card)