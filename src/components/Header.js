import React, {useContext, useState} from 'react';
import {UserContext} from '../context/userContext';
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import LoginForm from './Login.js';
import Register from './Register.js';
import UserActive from './User.js';

function Header() {

	const [state] = useContext(UserContext)
	
	return(
		<>
		<div className="container-fluid">
			<nav className="navbar navbar-light foodways-navbar">
				<Nav.Link as={Link} to="/" className="navbar-brand" href="#">
					<span className="mr-2">FoodWays</span>
					<img src="images/logo.png" />
				</Nav.Link>
				<div className="d-block position-relative">
				{(state.isLogin) ? (
					<UserActive role="user" />
				):(
					<>
					<Register />
					<LoginForm />
					</>
				)}
				</div>
			</nav>
		</div>
		</>
	);
}

export default Header
