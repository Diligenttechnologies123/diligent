import React from 'react';
import logo from "../../assets/images/diligent-logo.jpg"

export const Header = () => {
  return (
   <header>

<nav className="navbar navbar-expand-md">
  <div className="container-fluid">
    <div className='diligent-logo'>
    <a className="navbar-brand m-4" href="#"><img src={logo} /></a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul> */}

    </div>
  </div>
</nav>
    </header>
  )
}
