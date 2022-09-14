import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import profilelogo from "../images/profile.png";

function Header() {
  const Navigate = useNavigate();

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [user_name, setUsername] = useState([]);
  // const [city, setCity] = useState([]);
  const [w_current, setCurrent] = useState([]);
  const [w_condition, setCCondition] = useState([]);
  const [w_location, setLocation] = useState([]);

  useEffect(() => {
    const name = localStorage.getItem("User_name");
    setName(name);
    const email = localStorage.getItem("User_email");
    setEmail(email);
    const user_name = name.slice(0, 1);
    setUsername(user_name);

    fetch("https://geolocation-db.com/json/").then((result) => {
      result.json().then((res) => {
        console.warn(res.city);
        // setCity(res.city);
        const city = res.city;
        fecthapi(city);
      });
    });
    // console.warn(city);

    function fecthapi(city) {
      var c = city;
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=3c89b72c27aa4178b02105134223105&q=${c}&days=1&aqi=no&alerts=no`
      ).then((result) => {
        result.json().then((res) => {
          console.warn(res);
          setCurrent(res.current);
          setCCondition(res.current.condition);
          setLocation(res.location);
        });
      });
    }
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
                <Link className="nav-link" to="/user">
                  User
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {/* {!w_condition || !w_current ? (
                <p></p>
              ) : (
                <div>
                  <img src={w_condition.icon} alt="user-profile" />{" "}
                  <h6 className="mb-0 mx-1">{w_current.temp_c}°C</h6>
                </div>
              )} */}
              <div className="dropdown mx-sm-2">
                <button
                  className="btn dropdown-toggle p-0 headerdropdown"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                >
                  <p className="user_name">{user_name}</p>
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
                  {/* <p className="dropdown-item mb-0">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp; {w_location.name}
                  </p> */}
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
