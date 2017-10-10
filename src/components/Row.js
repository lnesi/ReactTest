import React, { Component } from 'react';
import './Row.css';

class Row extends Component {
	render(){
		const columns=this.props.columns;
		const renderColumns=[];
		const gridWidth=480;
		const boxSize=gridWidth/columns;
		for(var i=0;i<columns;i++){
			renderColumns.push(<button className="box" style={{'width':boxSize+'px',"height":boxSize+'px'}} key={i}/>);
		}
		return(
			<div>{renderColumns}</div>
			)
	}
}

export default Row;