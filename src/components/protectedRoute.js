import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
const ProtectedRoute = ({component:Component,login,location,...rest}) => {
    console.log(login)
        return (  
          <Route {...rest} render={(props)=>{
              if (login)
              {return <Component from={props.location} {...props}/>}
              else{
                  console.log("redirecting")
                return (
                    <Redirect to={
                        {pathname:"/login",
                     state:{
                         from:props.location
                     }}
                    }></Redirect>
                   )
              }
          }} />
      );
  
  
}
function mapStateToProps (state){
    const {login}=state.login
    return{
        login
    }
}
 
export default connect(mapStateToProps)(ProtectedRoute);