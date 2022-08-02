import React from "react";

const Header = () => {
    const handleLogout = () => {
        localStorage.removeItem("mobile");
    }
  return (
    <>
      <div className="header_section"></div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#222629", height: "18vh" }}
      
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
              <a className="nav-link" style={{ color: "#86C232" }} href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: "#86C232" }} href="/about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" style={{ color: "#86C232" }} href="#footerComponent">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "#86C232" }}
                href="/stats"
              >
                Statistics
              </a>
            </li>
            {localStorage.mobile ? (
              <></>
            ) : (
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "#86C232" }}
                  href="/login"
                >
                  Login
                </a>
              </li>
            )}
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "#86C232" }}
                href="/admin_login"
              >
                I'm an Admin
              </a>
            </li>
          </ul>
          {localStorage.mobile ? (
            <a
              href="/"
              style={{
                color: "red",
                textDecoration: "none",
                fontSize: "22",
                padding: "30px",
              }}
              onClick={handleLogout}
            >
              Logout
            </a>
          ) : (
            <></>
          )}

          <form
            className="form-inline my-2 my-lg-0"
            style={{ marginRight: "20px" }}
          >
            <button className="donate_btn" type="submit">
              <a
                style={{
                  width: "200px",
                  backgroundColor: "#86C232",
                  textAlign: "center",
                  fontWeight: "800",
                  padding: "11px",
                  color: "white",
                  fontSize: "12",
                  display: "inline-block",
                  textDecoration: "none",
                }}
                href="https://pmny.in/8IFnnKAeyEit"
                target="_blank"
              >
                {" "}
                Donate Now{" "}
              </a>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
