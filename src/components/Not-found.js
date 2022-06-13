import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

class Notfound extends React.Component {
  render() {
    document.title = "Not-found";
    return (
      <>
        <Header />
        <div className="notfound-page">
          <div className="container-animate">
            <div className="push-pop">
              <div></div>
              <div></div>
            </div>
          </div>
          <h1 className="text-center text-black">404</h1>
          <p className="text-dark">Looks Like you are lost.</p>
          <Link to="/">
            <button className="btn btn-primary">Go back to home</button>
          </Link>
        </div>
      </>
    );
  }
}

export default Notfound;
