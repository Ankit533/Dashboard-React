import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Users() {
  document.title = "Users";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((res) => {
        setData(res);
      });
    });
  }, []);
  console.warn(data);
  return (
    <>
      <Header />
      <div className="container-fluid layout-main p-4">
        <div className="users-table table-responsive">
          <h4>Users Info</h4>
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address.street}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Users;
