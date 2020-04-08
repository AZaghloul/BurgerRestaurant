//Input: count, pageSize, activePage
//Output: pageChange

import React from "react";
import _ from "lodash";

const Pagination = props => {
  const pagesNo = Math.ceil(props.count / props.pageSize);

  const pages = _.range(1, pagesNo + 1);

  return (
    <nav>
      {pagesNo > 1 && (
        <ul className="pagination">
          {pages.map(page => (
            <li
              onClick={() => props.pageChanged(page)}
              key={page}
              className={
                page === props.activePage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link">{page}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
