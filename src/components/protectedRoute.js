import {Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'
const ProtectedRoute = ({component:Component,login,...rest}) => {
  if (login){

      return (  
          <Route {...rest} render={(props)=>{
              return <Component {...props}/>
          }} />
      );
  }
  else{
      return (
        <div className='col-6 mx-auto'>
        <h1>You must login first</h1>
        <Link className='btn btn-primary' to="/login">Login</Link>
        </div>
      )
  }
}
function mapStateToProps (state){
    const {login}=state.login
    return{
        login
    }
}
 
export default connect(mapStateToProps)(ProtectedRoute);