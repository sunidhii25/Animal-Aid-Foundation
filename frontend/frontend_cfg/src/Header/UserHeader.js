import React from "react";

const UserHeader = () => {

    const handleLogout = () => {
        localStorage.removeItem("mobile");
    }
  return (
    <>
      <div className="header_section"></div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#222629", width: "100vw", height: "8vh", display: "flex", alignItems: "center",paddingTop: "70px" }}
      >
        <a className="navbar-brand">
          <a href="index.html">
            {/* <img src="images/icon-2.png" /> */}
          </a>
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
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <h1>
            <b>
              <i style={{ color: "white" }}>Animal Aid Foundation</i>
            </b>
          </h1>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/" style={{ color: "#86C232" }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/stats"
                style={{ color: "#86C232" }}
              >
                View Dashboards
              </a>
            </li>
          </ul>
          {localStorage.mobile ? (
            <form className="form-inline my-2 my-lg-0">
              <ul>
                <li>
                  <a className="nav-link" href="/" style={{ color: "red" }} onClick={handleLogout} >
                    Log Out
                  </a>
                </li>
              </ul>
            </form>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </>
  );
};

export default UserHeader;
