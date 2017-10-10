import React, { Component } from 'react';
import Row from "./Row"
import {connect} from 'react-redux';

const stateMap = (state) => {
    return state
};



class Grid extends Component {
	render(){
		const columns=this.props.columns;
		const rows=this.props.rows;
		const renderColumns=[];
		const renderRows=[];
		
		for(var i=0;i<rows;i++){
			renderRows.push(<Row key={i} columns={columns}/>);
		}
		return(
			<div>
			{renderRows}
			</div>
			)
	}
}

export default connect(stateMap)(Grid);