import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  document.title = "Register";

  // to check if user logged in or not. If logged in then redirect to dashboard.

  var Navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("User_id") != null) {
      Navigate("/dashboard");
    }
  }, [Navigate]);

  // check ends here

  return (
    <>
      <div className="register-page">
        <div className="header">
          <div className="inner-header flex" id="inner-register">
            <div className="container text-center">
              <div className="register-wrapper">
                <h2 className="mb-3 text-black">Signup</h2>
                <form>
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label className="text-black">First Name</label>
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
                        <label className="text-black">Last Name</label>
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
                        <label className="text-black">Organisation</label>
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
                        <label className="text-black">Designation</label>
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
                        <label className="text-black">E-mail</label>
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
                        <label className="text-black">Country</label>
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
                      <p id="login-here" className="text-dark mt-3">
                        Already have an account? <Link to="/">Login here</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
