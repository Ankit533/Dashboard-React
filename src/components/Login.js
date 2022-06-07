import React from "react";
import { Link } from "react-router-dom";
import "../media.css";
class Login extends React.Component {
  componentDidMount() {
    console.warn("works");
  }
  render() {
    return (
      <div className="login-page">
        <div className="container text-center">
          <div className="login-wrapper">
            <h2 className="mb-3">Login</h2>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="form-group">
                <p id="loginerror"></p>
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <p id="regsiter" className="mt-3">
                Don’t you have an account,{" "}
                <Link to="/register">Signup here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
