import React from 'react';
import LoginRegister from '../components/LoginRegister'
import Header from '../components/Header'

export default function Auth(){
    return (
    <div className="Container_Auth">
        <Header />
        <LoginRegister/>
    </div>
    )
}