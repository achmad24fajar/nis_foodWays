import 'bootstrap/dist/css/bootstrap.css';

function Register() {
  return(
    // Modal
	<div className="modal fade" id="exampleModalRegister" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content">
				<div className="modal-header border-bottom-0 px-5 pb-0">
					<h3 className="modal-title text-warning" id="exampleModalLabel">Register</h3>					
				</div>
				<div className="modal-body px-5">
					<form>
						<div className="form-group">
							<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email address" aria-describedby="emailHelp"/>
						</div>
						<div className="form-group">
							<input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1"/>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="fullName" placeholder="Full Name"/>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="gender" placeholder="Gender"/>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="phone" placeholder="Phone"/>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" id="asUser" placeholder="As User"/>
						</div>
						<button type="submit" className="btn btn-dark btn-block mt-4">Register</button>
						<small className="form-text text-muted text-center mt-2">Already have an account? Klik <a href="#">Here</a></small>
					</form>
				</div>
			</div>
		</div>
	</div>
  );
}

export default Register