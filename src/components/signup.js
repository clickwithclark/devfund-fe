import React from "react";
import superagent from "superagent";
import { LoginContext } from "./auth/context.js";
import Login from "./login.js";

const API = "https://dev-fund.herokuapp.com";

class Signup extends React.Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e, loginMethodFromContext) => {
    e.preventDefault();
    let data = this.state;
    superagent
      .post(`${API}/signup`)
      .send(data)
      .then(res => {
        loginMethodFromContext(res.text)
      })
      .catch(console.error);
  };

  componentDidMount() {
    this.props.closeModal();
  }

  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          return (
            <>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <form onSubmit={ e => this.handleSubmit(e, context.login)}>
                <fieldset>
                  <legend>Login Information:</legend>
                  <label>
                    Username:
                    <input
                      type="text"
                      name="username"
                      onChange={this.handleChange}
                      required
                    />
                  </label>
                  <label>
                    Password:
                    <input
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                      required
                    />
                  </label>
                </fieldset>
                <fieldset>
                  <legend>Personal Information:</legend>
                  <label>
                    First name:
                    <input
                      type="text"
                      name="firstname"
                      onChange={this.handleChange}
                      required
                    />
                  </label>
                  <label>
                    Last name:
                    <input
                      type="text"
                      name="lastname"
                      onChange={this.handleChange}
                      required
                    />
                  </label>
                  <label>
                    Email:
                    <input
                      type="text"
                      name="email"
                      onChange={this.handleChange}
                      required
                    />
                  </label>
                  <label>
                    Phone:
                    <input
                      type="text"
                      name="phone"
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    Address 1:
                    <input
                      type="text"
                      name="address1"
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    Address 2:
                    <input
                      type="text"
                      name="address2"
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    City:
                    <input
                      type="text"
                      name="city"
                      onChange={this.handleChange}
                      required
                    />
                  </label>
                  <label>
                    State:
                    <input
                      type="text"
                      name="state"
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    Zip:
                    <input
                      type="text"
                      name="zip"
                      onChange={this.handleChange}
                    />
                  </label>
                </fieldset>
                <button type="submit">
                  {/* <Link to="/account"> */}
                  Submit
                  {/* </Link> */}
                </button>
              </form>
            </>
          );
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Signup;
