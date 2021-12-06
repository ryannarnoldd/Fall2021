import React, { useState } from "react";
import LoginBadge from "./LoginBadge";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";


export default function Nav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div id="nav">
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="../assets/logo.png" height="28"></img>
            <h3 className="title">Be Happy</h3>
          </a>

          <a role="button" className={"navbar-burger" + (isActive && " is-active")} aria-label="menu" aria-expanded="false" className="{https://tenor.com/view/sniff-nose-ice-age-squirrel-scrat-gif-5937862: isActive}" onClick={()=> setIsActive}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="container">
          <div className={"navbar-menu" + (isActive ? " is-active" : '')}>
            <div className="navbar-start">
              <NavLink className={({ isActive }) => "navbar-item is-tab" + (isActive && " is-active")} to="/" exact>
                Home
              </NavLink>

              <NavLink className={({ isActive }) => "navbar-item is-tab" + (isActive && " is-active")} to="/feed">
                Feed
              </NavLink>

              <NavLink className={({ isActive }) => "navbar-item is-tab" + (isActive && " is-active")} to="/about">
                Documentation
              </NavLink>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  <NavLink className={({ isActive }) => "navbar-item is-tab" + (isActive && " is-active")} to="about">
                    About
                  </NavLink>
                  <a className="navbar-item">
                    Jobs
                  </a>
                  <a className="navbar-item">
                    Contact
                  </a>
                  <hr className="navbar-divider"></hr>
                  <a className="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <LoginBadge />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}