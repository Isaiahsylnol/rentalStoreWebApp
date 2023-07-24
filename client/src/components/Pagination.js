import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  let pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  function showPaginationNumbers(pageNumbers) {
    let paginationNumbers = [];

    if (pageNumbers) {
      let showMax = 3;
      let endPage;
      let startPage;

      if (pageNumbers <= showMax) {
        startPage = 1;
        endPage = pageNumbers.length;
      } else {
        startPage = currentPage;
        if (
          startPage !== pageNumbers.length &&
          startPage + 1 !== pageNumbers.length
        ) {
          endPage = currentPage + showMax - 1;
        } else {
          endPage = pageNumbers.length;
        }
      }
      for (let i = startPage; i <= endPage; i++) {
        paginationNumbers.push(i);
      }
      return paginationNumbers;
    }
  }
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  let result = showPaginationNumbers(pageNumbers);
  return (
    <nav>
      <ul className="flex justify-center p-5">
        <li className="page-item p-2">
          <Link className="page-link text-white" onClick={prevPage} to={"#"}>
            Previous
          </Link>
        </li>
        {result.map((pgNumber) => (
          <Link
            key={pgNumber}
            className={`page-item page-link p-2 text-white ${
              currentPage === pgNumber
                ? "active border bottom-2 border-white rounded-3xl"
                : ""
            } `}
            onClick={() => setCurrentPage(pgNumber)}
            to={"#"}
          >
            {pgNumber}
          </Link>
        ))}
        <li className="page-item p-2">
          <Link className="page-link text-white" onClick={nextPage} to={"#"}>
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
