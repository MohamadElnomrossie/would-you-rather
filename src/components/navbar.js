import React, { Component } from "react";
import logout from "../actions/logout"
import { connect } from "react-redux";
import {NavLink} from "react-router-dom"
class Navbar extends Component {
 
  logout=()=>{
    this.props.logout()
  }
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top ">
          <div className="container-fluid d-flex">
            <span className="navbar-brand" href="#">
            {this.props.login.login&&this.props.users[this.props.login.login].name}
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-link me-0 " to="/dashboard">Dashboard</NavLink>
                <NavLink className="nav-link me-0" to="/leaderboard">Leader Board</NavLink>
                <NavLink className="nav-link me-0" to="/add">New Question</NavLink>
                <NavLink to="/login" className="nav-link me-0" onClick={this.logout}>Logout</NavLink>            
              </div>
            </div>
          </div>
        </nav>

    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
      logout:()=>dispatch(logout())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
