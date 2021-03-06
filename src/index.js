import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import PlaylistCard from './dashboard/PlaylistCard';

import * as serviceWorker from './serviceWorker';


const routing = (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path='/dashboard' component={Dashboard} />
			<Route path='/dashboard/playlist' component={PlaylistCard}/>
			<Route component={Home} />
		</Switch>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();