import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Games from './components/Games';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/games" component={Games} />
			</Switch>
		</Router>
	);
};

export default App;
