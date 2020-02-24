import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }

    // this.deleteCustomer = this.deleteCustomer.bind(this)
  }

  submitForm = () => {
    this.setState({
      loading: true
    })
    this.props.submitHandler()
  }

  render() {
    // const { email, password } = this.state
    return (
      <div>
        <div className="container " style={{ position: 'relative' }}>
          <div className="container" style={{ marginTop: '90px', position: 'absolute' }}>
            <form className="vertical-center" onSubmit={this.props.submitHandler}>
              <div className="form-group vertical-center">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={this.props.email}
                  onChange={this.props.inputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={this.props.password}
                  onChange={this.props.inputHandler}
                />
              </div>

              {this.state.loading ? (
                <button className="btn btn-secondary" type="submit" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </button>
              ) : (
                <button type="submit" className="btn btn-secondary" onClick={this.submitForm}>
                  Log In
                </button>
              )}

              <p className="mt-5">
                If you don't have an account, please sign up <Link to="/signup">here</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
