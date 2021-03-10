
import Login from './Login.js';

function Header() {
	return(
		<div className="container-fluid">
			<nav className="navbar navbar-light">
				<a className="navbar-brand" href="#">
					<span className="mr-2">FoodWays</span>
					<img src="images/logo.png" />
				</a>
				<div>
					<Login />
				</div>
			</nav>
		</div>
	);
}

export default Header