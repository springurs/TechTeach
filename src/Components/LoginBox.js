import React, { Component } from 'react'
import '../Components/login.css'

export default class LoginBox extends Component {
  render() {
    return (
      <div className="loginbox">
       <form className="box">
         <h1>Login</h1>
         <input className="txtb" type="text" placeholder="Username"></input>
         <input className="txtb" type="password" placeholder="Password"></input>
         <input className="logbtn" type="Submit" value="Login"></input>
       </form>
      </div>
    )
  }
}
