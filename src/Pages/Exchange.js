import React, { Component } from 'react';
import {connect} from 'react-redux';
import fetchRates from '../Actions.js';
function mapStateToProps(state) {
	return state;
}

class Exchange extends Component {
	componentDidMount(){
		this.props.dispatch(fetchRates(this.props.match.params.base))
	}
	render(){
		if(this.props.loading){
			return(<div>
			Loading
			</div>)
		}else{
			return (
				<div>
				Exchange
				</div>
				)
		}

	}
}

export default connect(mapStateToProps)(Exchange);
