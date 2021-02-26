import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Settings from './pages/Settings'

export default () => {

	return (
		<Switch>
			<Route exact path="/" >
				<Home />
			</Route>
			<Route exact path="/services">
				<Settings />
			</Route>
		</Switch>
	)
}


