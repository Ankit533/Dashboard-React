import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Dashboard() {
  document.title = "Dashboard";

  // to check if user logged in or not. If not logged in then redirect to login.
  const navigate = useNavigate();
  var user_id = localStorage.getItem("User_id");
  const [data1, setMaP] = useState([]);
  const [data2, setMap2] = useState([]);

  useEffect(() => {
    if (user_id == null) {
      navigate("/");
    }
    fetch("https://api.coincap.io/v2/assets/?limit=5").then((result) => {
      result.json().then((res) => {
        setMaP(res.data);
      });
    });
    fetch(
      "https://api.worldbank.org/v2/countries/NOR/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=json"
    ).then((result) => {
      result.json().then((res) => {
        console.warn(res[1]);
        setMap2(res[1]);
      });
    });
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
        <div className="row mt-2">
          <div className="col-lg-6 mb-3">
            <div className="chart">
              <Bar
                data={{
                  labels: data1.map((crypto) => crypto.name),
                  datasets: [
                    {
                      barPercentage: 0.5,
                      // barThickness: 50,
                      minBarLength: 10,
                      data: data1.map((crypto) => crypto.priceUsd),
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(255, 159, 64, 0.5)",
                        "rgba(255, 205, 86, 0.5)",
                        "rgba(75, 192, 192, 0.5)",
                        "rgba(54, 162, 235, 0.5)",
                      ],
                      borderColor: [
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(54, 162, 235)",
                      ],
                      borderWidth: 1,
                      label: "Price in USD",
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "Cryptocurrency prices",
                    },
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="chart">
              <Line
                data={{
                  labels: data2.map((date) => date.date),
                  datasets: [
                    {
                      barPercentage: 0.5,
                      barThickness: 100,
                      minBarLength: 10,
                      data: data2.map((date) => date.value),
                      backgroundColor: ["rgba(124, 181, 236)"],
                      borderColor: ["rgb(124, 181, 236)"],
                      borderWidth: 3,
                      label: "Norway",
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: "GDP Growth (annual in %)",
                    },
                    legend: {
                      display: true,
                      position: "bottom",
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <Calendar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
