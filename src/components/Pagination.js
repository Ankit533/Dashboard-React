import React from "react";

const Pagination = ({ totaldata, dataperpage, setCurrentPage, currenPage }) => {
  let pages = [];
  for (var i = 1; i <= Math.ceil(totaldata / dataperpage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination-div">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currenPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
