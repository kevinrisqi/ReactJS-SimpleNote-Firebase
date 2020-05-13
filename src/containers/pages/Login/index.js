import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';
import { loginUserAPI } from '../../../config/redux/action';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleLoginSubmit = async () => {        
        const { email, password } = this.state;
        const {history} = this.props;
        const res = await this.props.loginAPI({email, password}).catch(err => err);
        if (res) {
            console.log('Login Success', res)
            localStorage.setItem('userData', JSON.stringify(res))
            this.setState ({
                email: '',
                password: ''
            })
            history.push('/')
        }
        else {
            console.log('Login Failed')
        }
    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <div className="anpmuth-title">
                        <p>Login Page</p>
                        <input className="input" id="email" type="text" placeholder="Email" onChange={this.handleChangeText} value={this.state.email}></input>
                        <input className="input" id="password" type="password" placeholder="Pasword" onChange={this.handleChangeText} value={this.state.password}></input>
                        {/* <button className="btn" onClick={this.handleRegisterSubmit}>Go to Register</button> */}
                        <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading}/>
                    </div>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login);