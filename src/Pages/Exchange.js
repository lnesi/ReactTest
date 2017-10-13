import React, { Component } from 'react';
import {connect} from 'react-redux';
import fetchRates from '../Actions.js';
import {Link} from 'react-router-dom';

function mapStateToProps(state) {
	return state;
}

class Exchange extends Component {
	componentDidMount(){
		this.props.dispatch(fetchRates(this.props.match.params.base));
		//mdc.textfield.MDCTextfield.attachTo(document.querySelector('.mdc-textfield'));
	}
	onKeyUpHandler(){
		this.props.dispatch({type:"SET_BASE_AMOUNT",payload:document.getElementById("amount_in").value});
		
	}
	render(){
		return (
				<div>

					<div className="App-content-holder"> 
						<p className="App-text_left">Base Currency: ({this.props.match.params.base})</p>
						<div className="mdc-textfield mdc-textfield--fullwidth">
						  <input type="number" onKeyUp={this.onKeyUpHandler.bind(this)} id="amount_in" className="mdc-textfield__input" placeholder="Amount"/>
						 
						</div>
					</div>
					<ul className="mdc-list mdc-list--two-line two-line-avatar-text-icon-demo">
		                {
		                	this.props.currency_list.map(function(code){
		                		let item=this.props.currencies[code];
		                		let flagclass='mdc-list-item__start-detail flag-icon flag-icon-'+item.flag;
		                		if(code!==this.props.match.params.base){
		                			return (
										<li key={item.code} className="mdc-list-item App-currency_entry">
						                 <i className={flagclass} aria-hidden="true"></i>
						                  <span className="mdc-list-item__text">
						                    {(this.props.rates[item.code]*this.props.currentAmount).toFixed(5)}
						                    <span className="mdc-list-item__text__secondary"> {this.props.rates[item.code]} {item.name} ({item.code}) </span>
						                  </span>
						                 
						                </li>
		                			)
		                		}
		                	}.bind(this))
		                }
		                

              		</ul>
              		<div className="App-content-holder App-text_right"> 
	              		
	              		<Link to="/" className="mdc-button mdc-button--raised">
						 BACK
						</Link>
					</div>
				</div>
				);

	}
}

export default connect(mapStateToProps)(Exchange);
