import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
	render(){

		return(
			<header className="mdc-toolbar App-header">
			  <div className="mdc-toolbar__row">
			    <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
					<Link to="/react" className="App-headerLink"><span className="mdc-toolbar__title">Exchanger</span></Link>
			    </section>
			  </div>
			</header>
		);
	}
}
export default Header;
