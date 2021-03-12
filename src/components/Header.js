import React, {useState} from 'react';

import LoginForm from './Login.js';
import Register from './Register.js';
import UserActive from './User.js';

function Header() {
	const [isLogged, setLogin] = useState(false);
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	const Login = values => {
		setEmail(values.email);
		setPass(values.password);
		setLogin(values.isLog);
	}

	return(
		<>
		<div className="container-fluid">
			<nav className="navbar navbar-light foodways-navbar">
				<a className="navbar-brand" href="#">
					<span className="mr-2">FoodWays</span>
					<img src="images/logo.png" />
				</a>
				<div className="d-block">
				{(isLogged) ? (
					<UserActive email={email} password={pass} role="admin" />
				):(
					<>
					<Register />
					<LoginForm Login={Login} />
					</>
				)}
				</div>
			</nav>
		</div>
		</>
	);
}

export default Header
