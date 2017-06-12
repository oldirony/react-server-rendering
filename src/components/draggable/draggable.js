import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getSiblingIndex} from '../../lib/utils';

const draggable = (Comp) => {
	return class Draggable extends Component {
		render(){
			return (
				<div className="draggable"
					 draggable={true}
					 onDragOver={e=>e.preventDefault()}
					 onDragStart={this.handleDragStart.bind(this)}
					 onDrop={this.handleDrop.bind(this)} ref={el=>this.elem=el}>
					<Comp {...this.props}/>
				</div>
			)
		}

		handleDragStart(e){
			e.dataTransfer.setData("text/plain", getSiblingIndex(this.elem));
		}

		handleDrop(e){
			alert(e.dataTransfer.getData("text"));
			console.log(e.dataTransfer.getData("text"));
			// console.log(getSiblingIndex(this.elem));

			// console.log(e.target);
		}

		static propTypes = {};
	}
}

export default draggable;