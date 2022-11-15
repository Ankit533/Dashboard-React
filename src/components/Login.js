import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../media.css";
function Login() {
  document.title = "Login";

  // to check if user logged in or not. If logged in then redirect to dashboard.

  const Navigate = useNavigate();
  var user_id = localStorage.getItem("User_id");

  useEffect(() => {
    if (user_id != null) {
      Navigate("/dashboard");
    }
  }, [Navigate, user_id]);

  // check ends here

  // set state for getting input values from input fields

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // check function for login

  function check() {
    if (name === "" || email === "") {
      document.getElementById("loginerror").innerHTML =
        "All fields are required!";
    } else {
      var url =
        "https://belive.multitvsolution.com:3600/user/621726e2505a9/" + email;
      fetch(url).then((response) => {
        response.json().then((result) => {
          if (result.length == "0") {
            document.getElementById("loginerror").innerHTML =
              "Inavlid Credentials";
          } else {
            document.getElementById("loginerror").innerHTML = "Welcome!!";
            localStorage.setItem("User_id", result[0].id);
            localStorage.setItem("User_name", result[0].name);
            localStorage.setItem("User_email", result[0].email);
            setTimeout(() => {
              Navigate("/dashboard");
            }, "1500");
          }
        });
      });
    }
  }

  return (
    <div className="login-page">
      <div className="header">
        <div className="inner-header flex">
          <div className="container text-center">
            <div className="login-wrapper">
              <h2 className="text-black mb-3">Login</h2>
              <form>
                <div className="form-group">
                  <label className="text-black">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="text-black">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <p id="loginerror"></p>
                </div>
                <button
                  type="button"
                  onClick={check}
                  className="btn btn-primary"
                >
                  Login
                </button>
                <p id="regsiter" className="text-dark mt-3">
                  Don’t you have an account?{" "}
                  <Link to="/register">Signup here</Link>
                </p>
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
  );
}

export default Login;
