import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("http://localhost:5000/api/login", this.state.credentials)
            .then(res => {
                console.log('bk: Login.js: login: response: ', res);
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
            })
            .catch(err => console.log('bk: Login.js: login: error: ', err))
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    render() {
        return (
            <>
                {/* {console.log('bk: Login.js: return: state: ', this.state)} */}
                <div>
                    <h1>Welcome to the Bubble App!</h1>
                    <section>
                        <form onSubmit={this.login}>

                            <input
                                type='text'
                                name='username'
                                placeholder='username'
                                value={this.state.credentials.username}
                                onChange={this.handleChange}
                            />

                            <input
                                type='text'
                                name='password'
                                placeholder='password'
                                value={this.state.credentials.password}
                                onChange={this.handleChange}
                            />

                            <button>Login</button>

                        </form>
                    </section>
                </div>
            </>
        );
    }
  
};

export default Login;
