import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="register-page">
        <div className="container text-center">
          <div className="register-wrapper">
            <h2 className="mb-3">Signup</h2>
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Organisation</label>
                    <input
                      type="text"
                      className="form-control"
                      id="organisation"
                      placeholder="Organisation"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Designation</label>
                    <input
                      type="text"
                      className="form-control"
                      id="designation"
                      placeholder="Designation"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>E-mail</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="E-mail"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      placeholder="Country"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <p id="registererror"></p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 text-left">
                  <button type="submit" className="btn btn-primary">
                    Signup
                  </button>
                </div>
                <div className="col-lg-12 col-md-12 text-left">
                  <p id="login-here" className="mt-3">
                    Already have an account?, <Link to="/">Login here</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
