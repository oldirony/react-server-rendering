import React from 'react';
import IdeaListItem from '../../src/components/idea-list-item/idea-list-item';
import {shallow} from 'enzyme';
import {wrapper} from '../helper';
import classes from '../../src/components/idea-list-item/idea-list-item.scss';
import config from '../../src/config';

const props = {
	title: 'Idea title',
	timestamp: "2017-05-31T11:56:27.286Z",
	isCompleted: false,
	content: 'Lorem ipsum',
	sections: []
}


global.confirm = () => true


test('It renders correctly', ()=>{
	const ideaListItem = shallow(<IdeaListItem {...props} />);
	expect(ideaListItem).toMatchSnapshot();
});


describe('Structure', ()=>{
	test('Get completed class', ()=>{
		const ideaListItem = shallow(<IdeaListItem {...props} isCompleted={true}/>);
		expect(ideaListItem).toMatchSnapshot();
	});

	test('Renders section number', ()=>{
		const section = {
			title: 'Section title',
			content: 'My content here',
			isCompleted: false
		}
		let ideaListItem = shallow(<IdeaListItem {...props} sections={[section, section]}/>);

		expect(ideaListItem).toMatchSnapshot();

		ideaListItem = shallow(<IdeaListItem {...props} sections={[section, {...section, isCompleted:true}]}/>);

		expect(ideaListItem).toMatchSnapshot();
	});
})

describe('Behaviour', ()=>{
	const renderItem = (customProps={})=>mount(wrapper(<IdeaListItem {...props} {...customProps}/>));

	test('Update button click', ()=>{
		const handleUpdateClick = jest.fn();
		const ideaListItem = renderItem({handleUpdateClick});
		ideaListItem.find(`.${classes.buttons}`).find('button').first().simulate('click');

		expect(handleUpdateClick).toBeCalled();
	});

	test('Delete button click', ()=>{
		const handleDeleteClick = jest.fn();
		const ideaListItem = renderItem({handleDeleteClick});
		ideaListItem.find(`.${classes.buttons}`).find('button').last().simulate('click');

		expect(handleDeleteClick).toBeCalled();
	});


})