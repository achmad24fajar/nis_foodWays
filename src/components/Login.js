import 'bootstrap/dist/css/bootstrap.css';

function Login() {
  return(
    // Modal
	<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content">
				<div className="modal-header border-bottom-0 px-5 pb-0">
					<h3 className="modal-title text-warning" id="exampleModalLabel">Login</h3>					
				</div>
				<div className="modal-body px-5">
					<form>
						<div className="form-group">
							<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email address" aria-describedby="emailHelp"/>
						</div>
						<div className="form-group">
							<input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1"/>
						</div>
						<button type="submit" className="btn btn-dark btn-block mt-4">Login</button>
						<small className="form-text text-muted text-center mt-2">Don't have an account? Klik <a href="#">Here</a></small>
					</form>
				</div>
			</div>
		</div>
	</div>
  );
}

export default Login