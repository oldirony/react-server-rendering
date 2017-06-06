import React from 'react';
import IdeaForm from '../../src/components/idea-form/idea-form';
import {shallow} from 'enzyme';

const ideaFormProps = {
	formAction: ()=>true,
	formTitle: 'My title',
	label: 'Submit',
	redirectTo: 'test',
	handleSubmit: func=>func
}

test('Base rendering', ()=>{
	const ideaForm = shallow(<IdeaForm {...ideaFormProps}/>);
	expect(ideaForm).toMatchSnapshot();
});