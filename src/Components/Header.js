import React, { Component } from 'react';

class Header extends Component{
	render(){
		return(
			<header className="mdc-toolbar App-header">
			  <div className="mdc-toolbar__row">
			    <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
			      <span className="mdc-toolbar__title">Exchanger</span>
			    </section>
			  </div>
			</header>
		);
	}
}
export default Header;