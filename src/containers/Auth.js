import React, { Component } from 'react';
import LoginRegister from '../components/LoginRegister';
import Header from '../components/Header';
//import { getUser } from '../ducks/users' ;
//import { connect } from 'react-redux';

class Auth extends Component{

    componentDidMount(){
        //console.log(this.props)
       // this.props.getUser()
    }

    render(){
        return (
            <div className="Container_Auth">
                <Header />
                <LoginRegister />
            </div>
        )
    }

}

// function mapStateToProps(state){
//     return {
//         userData: state.user
//     }
// }

//export default connect(mapStateToProps,{getUser: getUser})(Auth)
export default Auth