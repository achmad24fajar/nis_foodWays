
import Login from './Login.js';
import Register from './Register.js';
import User from './User.js';

function Header() {
	let login = true;

	return(
		<div className="container-fluid">
			<nav className="navbar navbar-light foodways-navbar">
				<a className="navbar-brand" href="#">
					<span className="mr-2">FoodWays</span>
					<img src="images/logo.png" />
				</a>
				<div className="d-block">
				{ login ? <User email="achmad10@gmail.com" password="mypass" role="user" /> : <><Register /> <Login /></> }
				</div>
			</nav>
		</div>
	);
}

export default Header
