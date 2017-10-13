import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';

function mapState(state){
	return state;
}

class Landing extends Component {
	
	render( ){
		return (
			<div>
			<nav className="mdc-list">
				{
					this.props.currency_list.map((code)=>{
						let item=this.props.currencies[code];
						let classname='mdc-list-item__start-detail flag-icon flag-icon-'+item.flag;
						let linkurl="/exchange/"+item.code
						return (
						 <Link key={item.code} to={linkurl} className="mdc-list-item" data-mdc-auto-init="MDCRipple">
						    <i className={classname} aria-hidden="true"></i>
						    {item.name} ({item.code})
						  </Link>
						  );
					})
				}
			</nav>
			</div>
			)
	}
}

export default connect(mapState)(Landing);
