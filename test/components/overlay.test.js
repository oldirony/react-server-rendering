import React from 'react';
import Overlay from '../../src/components/overlay/overlay';

test('It renders correctly', ()=>{
	const Comp = ()=><div>asd</div>
	const OverlayMarkup = Overlay(Comp);

	let overlay = shallow(<OverlayMarkup />);
	expect(overlay).toMatchSnapshot();
})