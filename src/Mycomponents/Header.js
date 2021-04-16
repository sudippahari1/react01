import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>

   {  props.searchBar? <div className="input-group">
  <div className="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label className="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
    <i className="fas fa-search"></i>
  </button>
</div>: ""}
    </div>
  </div>
</nav>
    )
}
Header.defaultProps  = {
  titl: 'Your title here',
  serchBar : false
}

Header.propTypes = {
  title: PropTypes.string,
  serchBar: PropTypes.bool
}