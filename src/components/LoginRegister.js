import React, { Component } from 'react';
import logo from '../images/logo.png'

export default class LoginRegister extends Component {
    handleClick() {
        console.log('Login Register Clicked')
    }
    render() {
        return (
            <div className="LoginRegister" >
                <h1>LoginRegister comp</h1>
                <img src={logo} alt=""/>
                <a href={process.env.REACT_APP_LOGIN}><button onClick={()=>this.handleClick()}>Login / Register</button></a>
            </div>
        )
    }

}