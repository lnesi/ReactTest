import React, { Component } from 'react';

import './Generator.css';

class Generator extends Component {
	constructor(){
		super();
		this.state={rows:10,cols:10};
	}
	render(){
		return(
			<div className="App-generatorHolder">
				<div className="inputBox">
					<label htmlFor="rows">Rows</label>
					<input type="text" name="rows" defaultValue={this.state.rows}/>
				</div>
				<span>x</span>
				<div className="inputBox">
					<label htmlFor="cols">Rows</label>
					<input type="text" name="cols" defaultValue={this.state.cols}/>
				</div>
			</div>
			)
	}
}

export default Generator;