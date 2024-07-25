import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.websiteName}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn" type="submit">Search</button>
          </form>
        </div>
      </div>
 
    </nav>

       </>
  );
}
Navbar.prototype={
  websiteName : PropTypes.string.isRequired,
  // Add other props as needed
}
Navbar.defaultProps = {
  websiteName: 'Website Name',
  // Add default props as needed
}
export default Navbar;

