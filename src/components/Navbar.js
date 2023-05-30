import React, { Component } from 'react'
import { connect } from 'react-redux'
import { accountSelector } from '../store/selectors'
import {
  loadAccount
} from '../store/interactions'

class Navbar extends Component {
  componentDidMount() {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Add the custom class to the navbar
    navbar.classList.add('custom-bg-gradient');
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <a className="navbar-brand" href="#/">Block Noob Exchange</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link small"
              href={`https://etherscan.io/address/${this.props.account}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white !important' }}
            >
              {this.props.account}
              <button onClick={() => loadAccount()}
                className="btn btn-dark btn-sm bg-dark"
                style={{ marginLeft: '8px'}}
              >
              Connect</button>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    account: accountSelector(state)
  }
}

export default connect(mapStateToProps)(Navbar)