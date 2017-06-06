import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';

export const wrapper = (Component, initialEntries)=> (
	<MemoryRouter history={createBrowserHistory} initialEntries={initialEntries} >
		{Component}
	</MemoryRouter>
)