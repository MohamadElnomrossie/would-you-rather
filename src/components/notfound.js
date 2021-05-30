import React, { Component } from 'react';
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import Navbar from "./navbar"
class NotFound extends Component{
    render()
   { return ( 
        <div className='container-fluid p-0'>
            <Navbar/>
            <div className="mx-auto col-6">
            <h1 className='fs-1'>Error 404</h1>
            <Link to="/dashboard"><button className="btn btn-primary">Dashboard</button></Link>
            </div>
        </div>
     );}
}
function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps)(NotFound)
