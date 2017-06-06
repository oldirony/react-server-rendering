import React from 'react';
import SingleIdea from '../../src/components/single-idea/single-idea';

const props = {
	title: 'Title',
	timestamp: "2017-05-31T11:56:27.286Z",
	sections: []
}

test('It renders correctly', ()=>{
	let form = shallow(<SingleIdea {...props}/>);
	expect(form).toMatchSnapshot();
})
test('It renders correctly with content', ()=>{
	const content = `
		row 1
		row 2
	`;

	let form = shallow(<SingleIdea {...props} content={content}/>);
	expect(form).toMatchSnapshot();
})