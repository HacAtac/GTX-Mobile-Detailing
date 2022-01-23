import React from "react";

function Footer(props) {
  const footer = ["Corporate Policy", "Parivacy"];
  return (
    <ul className="nav nav-tabs">
      {footer.map((tab) => (
        <li className="nav-item" key={tab}>
          <a
            href={"#" + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? "nav-link active" : "nav-link"
            }
          >
            {footer}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default Footer;
