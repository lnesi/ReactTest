import React, { Component } from 'react';
import './Generator.css';

import {connect} from 'react-redux';

const stateMap = (state) => {
    return state
};

class Generator extends Component {
	onClickGenerate(){
		this.props.dispatch({
			type: 'SET_GRID',
			payload:{"rows":document.getElementById("rows").value,"columns":document.getElementById("columns").value}
			});
	}
	
	render(){
		return(
			<div className="App-generatorHolder">
				<div className="inputBox">
					<label htmlFor="rows">Rows</label>
					<input type="number" step="1" min="1" max="20" id="rows" defaultValue={this.props.rows}/>
				</div>
				<span>x</span>
				<div className="inputBox">
					<label htmlFor="cols">Columns</label>
					<input type="number" step="1" min="1" max="20" id="columns" defaultValue={this.props.columns}/>
				</div>
				<button onClick={this.onClickGenerate.bind(this)} >Generate</button>
			</div>
			)
	}
}

export default connect(stateMap)(Generator);