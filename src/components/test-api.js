import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import config from '../config';

class TestAPI extends Component {
	constructor(){
		super();

		this.state = {
			ideas: []
		};
	}

    render(){
        return <div>
			<h1>testing api</h1>
			<button onClick={()=>this.newIdea()}>create a new ideas</button>
			<button onClick={()=>this.getIdeas()}>get ideas</button>

			{this.renderIdeas()}
		</div>
    }

    renderIdeas(){
    	return this.state.ideas.length
				? (
					<ul>
						{this.state.ideas.map((idea)=><li>{idea.title}</li>)}
					</ul>
				 )
				: <div>no ideas</div>

	}

	newIdea() {
		axios.post(config.routes.newIdeaApi, {
			title: 'my title',
			content: 'lorem ipsum dolor sit amet',
			isCompleted: false,
			sections: []
		})
	}


	getIdeas() {
		axios.get(config.routes.getIdeasApi).then(({data}) => {
			this.setState({
				ideas: data
			})
		})
	}



	static propTypes = {};
}




export default TestAPI