
import Login from './Login.js';
import Register from './Register.js';

function Header() {
	return(
		<div className="container-fluid">
			<nav className="navbar navbar-light">
				<a className="navbar-brand" href="#">
					<span className="mr-2">FoodWays</span>
					<img src="images/logo.png" />
				</a>
				<div>
					<Register />
					<Login />
				</div>
			</nav>
		</div>
	);
}

export default Header