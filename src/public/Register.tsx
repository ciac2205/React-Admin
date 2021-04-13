import React, { Component, SyntheticEvent } from 'react';
import "./Public.css";
import axios from 'axios';
export default class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_Confirmed = '';
    // submit = (e: SyntheticEvent) => {
    //     e.preventDefault();
    //     axios.post(' http://127.0.0.1:8000/api/register', {
    //         first_name: this.first_name,
    //         last_name: this.last_name,
    //         email: this.email,
    //         password: this.password,
    //         password_Confirmed: this.password_Confirmed,
    //     }).then((res) => {

    //     })
    //     console.log(res);

    // }
    submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await axios.post('register', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_Confirmed: this.password_Confirmed,


        });
        console.log(response);

    }
    render() {
        return (
            <div>
                <main className="form-signin">
                    <form onSubmit={this.submit}>

                        <h1 className="h3 mb-3 fw-normal">Register</h1>
                        <label htmlFor="firstName" className="visually-hidden">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            onChange={e => this.first_name = e.target.value}
                            className="form-control"
                            placeholder="First Name" required />
                        <label htmlFor="lastName" className="visually-hidden">Last Name</label>
                        <input type="text"
                            id="lastName"
                            onChange={e => this.last_name = e.target.value}
                            className="form-control"
                            placeholder="Last Name" required />
                        <label htmlFor="email" className="visually-hidden">Email address</label>
                        <input
                            type="email"
                            id="email"
                            onChange={e => this.email = e.target.value}
                            className="form-control"
                            placeholder="Email address" required />
                        <label htmlFor="password" className="visually-hidden">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={e => this.password = e.target.value}
                            className="form-control"
                            placeholder="Password" required />
                        <label htmlFor="passwordConfirmed" className="visually-hidden">Password Confirmed</label>
                        <input
                            type="password"
                            id="passwordConfirmed"
                            onChange={e => this.password_Confirmed = e.target.value}
                            className="form-control"
                            placeholder="Password Confirmed" required />
                        <button
                            className="w-100 btn btn-lg btn-primary"
                            type="submit">Register</button>

                    </form>
                </main>
            </div>
        )
    }
}
