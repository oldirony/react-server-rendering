import express from 'express';
import compression from 'compression';
import React from 'react';
import reactDOMServer from 'react-dom/server';
import path from 'path';
import bodyParser from 'body-parser';
const server = express();


import config from './src/config';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { StaticRouter } from 'react-router';

import App from './src/app';
import reducer from './src/reducers';

const store = createStore(reducer, applyMiddleware(thunk));

import newIdea from './server/api/new-idea';
import getIdeas from './server/api/list-ideas';


server.use(compression());
server.use(bodyParser.json());

server.use('/dist', express.static(path.join(__dirname, 'public/dist')));
server.post(config.routes.newIdeaApi, newIdea);
server.get(config.routes.getIdeasApi, getIdeas);
server.get('*', function(req, res){
	const context = {};
	const markup = reactDOMServer.renderToString(
		<Provider store={store}>
			<StaticRouter
				location={req.url}
				context={context}>
				<App/>
			</StaticRouter>
		</Provider>
	);

	if (context.url) {
		res.writeHead(301, {
			Location: context.url
		});
		res.end()
	} else {
		res.write(`
		<!doctype html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport"
				  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<title>Document</title>
			<link rel="stylesheet" href="/dist/style.css">
		</head>
		<body>
			<div class="app">${markup}</div>
			<script src="/dist/bundle.js" ></script>
		</body>
		</html>
		`);
		res.end()
	}

}).listen(3000);


