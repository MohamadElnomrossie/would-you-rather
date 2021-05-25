import React, { Component } from 'react';
import {Link} from "react-router-dom"
class NotFound extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render()
   { return ( 
        <div className='container-fluid p-0'>
            <div className="mx-auto col-6">
            <h1 className='fs-1'>Error 404</h1>
            <Link to="/"><button className="btn btn-primary">Dashboard</button></Link>
            </div>
        </div>
     );}
}
function mapStateToProps(state){
    return state
}
export default NotFound
