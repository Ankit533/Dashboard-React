import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Dashboard() {
  document.title = "Dashboard";

  // to check if user logged in or not. If not logged in then redirect to login.
  const navigate = useNavigate();
  var user_id = localStorage.getItem("User_id");

  useEffect(() => {
    if (user_id == null) {
      navigate("/");
    }
  }, [navigate, user_id]);

  // check ends here
  return (
    <>
      <Header />
      <div className="container-fluid layout-main p-4">
        <div className="row info-main">
          <div className="col-lg-3 col-12 mb-3">
            <div className="info-box box1">
              <div className="info">
                <h6>Graphics</h6>
                <h1>18%</h1>
              </div>
              <div className="icon">
                <i className="fa fa-picture-o" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 mb-3">
            <div className="info-box box2">
              <div className="info">
                <h6>New users(Today)</h6>
                <h1>32</h1>
              </div>
              <div className="icon">
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 mb-3">
            <div className="info-box box3">
              <div className="info">
                <h6>Uptime</h6>
                <h1>5h12m</h1>
              </div>
              <div className="icon">
                <i className="fa fa-globe" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 mb-3">
            <div className="info-box box4">
              <div className="info">
                <h6>Text Coverage</h6>
                <h1>96%</h1>
              </div>
              <div className="icon">
                <i className="fa fa-cube" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-12 mb-3">
            <div className="info-box box5">
              <div className="info">
                <h6>Cloud users</h6>
                <h1>4216</h1>
              </div>
              <div className="icon">
                <i className="fa fa-cloud" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
