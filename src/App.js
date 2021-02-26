import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login/index'
import Routes from './Routes'

import { BrowserRouter } from 'react-router-dom'

import './App.css'

function App() {

	const [user, setUser] = useState(null)

	const loginDataGoogle = async (u) => {
		let newUser = {
			id: u.uid,
			name: u.displayName,
			avatar: u.photoURL
		}

		setUser(newUser)
	}
	const loginDataFacebook = async (u) => {
		let newUser = {
			id: u.uid,
			name: u.displayName,
			avatar: u.photoURL
		}

		setUser(newUser)
	}

	console.log(user)
	if (user === null) {
		return (
			<Login onReceiveGoogle={loginDataGoogle} onReceiveFacebook={loginDataFacebook} />
		)
	}
	return (
		<BrowserRouter>
			<Header user={user} />
			<Routes />
			<Footer />
		</BrowserRouter>
	);

}

export default App;
