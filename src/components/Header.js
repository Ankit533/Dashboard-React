import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilelogo from "../images/profile.png";

function Header() {
  const Navigate = useNavigate();

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  useEffect(() => {
    const name = localStorage.getItem("User_name");
    setName(name);
    const email = localStorage.getItem("User_email");
    setEmail(email);
  }, []);

  function logout() {
    window.localStorage.clear();
    Navigate("/");
  }
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/dashboard">
            Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {/* <div className="mr-sm-2">
                <div className="input-group" id="search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    id="inlineFormInputGroupUsername"
                  />
                  <i
                    className="input-group-text fa fa-search "
                    aria-hidden="true"
                    id="input-search"
                  ></i>
                </div>
              </div> */}
              <div className="dropdown mr-sm-2">
                <button
                  className="btn dropdown-toggle p-0 headerdropdown"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                >
                  <img src={profilelogo} alt="user-profile" />
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="dropdown-userinfo">
                    <h6 className="text-black mb-0">{name}</h6>
                    <p className="text-dark mb-0">{email}</p>
                  </div>
                  <hr></hr>
                  <Link className="dropdown-item" to="/profile">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    &nbsp; Profile
                  </Link>
                  <button className="dropdown-item" onClick={logout}>
                    <i className="fa fa-power-off" aria-hidden="true"></i>
                    &nbsp;Signout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
