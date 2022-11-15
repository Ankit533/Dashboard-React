import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Pagination from "./Pagination";
// import {Pagination}

function Contactus() {
  document.title = "Contact-us";
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataperPage, setDataPerPage] = useState(10);
  const lastDataIndex = currentPage * dataperPage;
  const firstDataIndex = lastDataIndex - dataperPage;
  const currentData = data.slice(firstDataIndex, lastDataIndex);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
      result.json().then((res) => {
        setData(res);
      });
    });
  }, []);
  console.warn(data);

  return (
    <>
      <Header />
      <div className="layout-main">
        <div className="users-table table-responsive">
          <h4>Todo List</h4>
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.completed.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            totaldata={data.length}
            dataperpage={dataperPage}
            setCurrentPage={setCurrentPage}
            currenPage={currentPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
