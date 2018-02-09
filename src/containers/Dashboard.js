import React, { Component } from 'react';
import Header from '../components/Header'
import { getUser } from '../ducks/users';
import { connect } from 'react-redux';


class Dashboard extends Component {
    componentDidMount(){
        console.log(this.props)
        this.props.getUser()
    }

    render(){
        let {userData} = this.props;
        return (
            <div className="Container_Dashboard">
                <Header />
                {JSON.stringify(this.props.userData, null, 2)}
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        userData: state.user
    }
}

export default connect(mapStateToProps,{getUser: getUser})(Dashboard)

