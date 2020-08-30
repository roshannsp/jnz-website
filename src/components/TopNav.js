import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

function TopNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand d-flex align-items-center">
          <img
            src="assets/jenosize-logo.webp"
            width="60"
            height="60"
            alt=""
            loading="lazy"
          />
          <h3 className="ml-3 text-black-50">Jenosize</h3>
        </div>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/Jenosize">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Restaurants">
                Restaurants
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Map">
                Map
              </Link>
            </li>
          </ul>
          <SearchBox></SearchBox>
        </div>
      </nav>
    </div>
  )
}

export default TopNav
