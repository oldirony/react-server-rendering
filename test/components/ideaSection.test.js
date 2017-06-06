import React from 'react';
import IdeaSection from '../../src/components/idea-section/idea-section';
import classes from '../../src/components/idea-section/idea-section.scss';

const props = {
	title: 'Section title',
	index: 1,
	updateSection: ()=>true,
	isCompleted: false
}
test('Base rendering', ()=>{
	let ideaSection = shallow(<IdeaSection {...props} />);
	expect(ideaSection).toMatchSnapshot();

	ideaSection = shallow(<IdeaSection {...props} isCompleted={true} />);
	expect(ideaSection).toMatchSnapshot();
});

test('Complete button click', ()=>{
	const updateSection = jest.fn();
	const ideaSection = mount(<IdeaSection {...props} updateSection={updateSection} />);

	ideaSection.find(`.${classes.button}`).simulate('click');

	expect(updateSection).toBeCalled();

});