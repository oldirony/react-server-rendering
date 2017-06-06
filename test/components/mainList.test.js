import React from 'react';
import MainList from '../../src/components/main-list/main-list';

const props = {
	ideas: {}
}

const ideas = {
	1 : {
		title: "title",
		isCompleted: false,
		timestamp: '2017-06-06T12:35:47+00:00'
	},
	2 : {
		title: "title",
		isCompleted: false,
		timestamp: '2017-06-06T12:35:47+00:00'
	}
}

test('It renders correctly without ideas', ()=>{
	let list = shallow(<MainList {...props}/>);
	expect(list).toMatchSnapshot();
})

test('It renders correctly without ideas with hidden completed ideas', ()=> {
	let list = shallow(<MainList {...props} hideCompletedIdeas={true}/>);
	expect(list).toMatchSnapshot();
})

test('It renders correctly with ideas', ()=> {
	let list = shallow(<MainList {...props} ideas={ideas}/>);
	expect(list).toMatchSnapshot();
})

test('It renders correctly with ideas with hidden completed ideas', ()=> {
	let list = shallow(<MainList {...props} hideCompletedIdeas={true} ideas={ideas}/>);
	expect(list).toMatchSnapshot();
})