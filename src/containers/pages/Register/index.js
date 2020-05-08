import React, { Component } from 'react';
import './Register.scss';
import firebase from '../../../config/firebase';

class Register extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = () => {
        // console.log('email',this.state.email)
        // console.log('password',this.state.password)
        
        const { email, password } = this.state;

        console.log('Data before send: ',email,password)

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            console.log('Success: ',res)
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
        });
    }
 
    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <div className="anpmuth-title">
                        <p>Register Page</p>
                        <input className="input" id="email" type="text" placeholder="Email" onChange={this.handleChangeText}></input>
                        <input className="input" id="password" type="password" placeholder="Pasword" onChange={this.handleChangeText}></input>
                        <button className="btn" onClick={this.handleRegisterSubmit}>Go to Register</button>
                    </div>
                    {/* <button>Go to Dashboard</button> */}
                </div>
            </div>
        )
    }
}

export default Register;