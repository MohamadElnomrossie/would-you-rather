import React, { Component } from "react";
import logout from "../actions/logout"
import { connect } from "react-redux";
import {NavLink,Link} from "react-router-dom"
class Navbar extends Component {
  logout=()=>{
    this.props.logout()
    this.props.history.push("/login")
  }
  render() {
    const checkUser=()=>{
      if (this.props.login.login!==undefined){
        return true
      }
      else{
        return false
      }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top ">
          <div className="container-fluid d-flex">
            <a className="navbar-brand" href="#">
              {checkUser()===true&&(this.props.users[this.props.login.login].name)}
            </a>
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
                <Link className="nav-link me-0 " to="/">Dashboard</Link>
                <Link className="nav-link me-0" to="/leaderboard">Leader Board</Link>
                <Link className="nav-link me-0" to="/newquestion">New Question</Link>
                <a className="nav-link me-0" onClick={this.logout}>
                  Logout
                </a>
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
