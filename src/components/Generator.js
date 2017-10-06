import React, { Component } from 'react';
import './Generator.css';

class Generator extends Component {
	render(){
		return(
			<div class="App-generatorHolder">
				<div class="col">
				<label for="">Rows</label>
				<input type="number"/>
				</div>
				<div class="col">
				<span>x</span>
				</div>
				<div class="col">
				<label for="">Rows</label>
				<input type="number"/>
				</div>
			</div>
			)
	}
}

export default Generator;