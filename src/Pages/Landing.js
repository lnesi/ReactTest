import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'flag-icon-css/css/flag-icon.css';
class Landing extends Component {

	render( ){

		return (
			<div>
			<nav className="mdc-list">
			  <Link to="/exchange/usd" className="mdc-list-item" data-mdc-auto-init="MDCRipple">
			    <i className="flag-icon flag-icon-us mdc-list-item__start-detail" aria-hidden="true"></i>
			    US Dollars (USD)
			  </Link>
			  <Link to="/exchange/eur" className="mdc-list-item" data-mdc-auto-init="MDCRipple">
			    <i className="flag-icon flag-icon-eu mdc-list-item__start-detail" aria-hidden="true"></i>
			    Euros (EUR)
			  </Link>
			  <Link to="/exchange/gbp" className="mdc-list-item" data-mdc-auto-init="MDCRipple">
			    <i className="flag-icon flag-icon-gb mdc-list-item__start-detail" aria-hidden="true"></i>
			    British Pound (GBP)
			  </Link>
			</nav>
			</div>
			)
	}
}

export default Landing;
