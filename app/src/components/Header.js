import React, { Component } from 'react';

export default class Header extends Component {


  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><img className="logo" src={require("../../libs/logo.png")}></img></a>
          </div>
          <h2>TechSpan</h2>
        </div>
      </nav>
    )
  }
}
